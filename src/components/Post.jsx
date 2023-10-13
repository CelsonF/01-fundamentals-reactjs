import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';



export function Post({author, publishedAt,content}) {

   
    
    const [comments,setComments]  = useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText,setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h':mm'm'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event) {
        event.preventDefault();

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event) {
       event.target.setCustomValidity('Essa mensagem não pode ser vazia!')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
       <article className={styles.post}>
            <header> 
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name} </strong>
                        <span> {author.role} </span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <ul key={line.content} className={styles.listNotOrdered}>
                                        <li>
                                            <a href='#'> {line.content} </a>
                                        </li>
                                    </ul>
                        }
                    }) 
                }

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu Feedback </strong>
                <textarea 
                    name='comment'
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}> Publicar </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                onDeleteComment={deleteComment}
                                key={comment} 
                                content={comment}
                            />
                        )
                    })
                }
            </div>

       </article>
    )
}