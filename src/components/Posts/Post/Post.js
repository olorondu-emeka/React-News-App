import React from 'react';
import classes from './Post.css';


const post = (props) => {

     return (
         <section className={classes.Post}>
             <div className={classes.PostImg}>
                 <img src={props.theImage} alt="" />
             </div>
            <div className={classes.PostContent}>
                <h3 >{props.theTitle}</h3>
                <p>{props.theContent}</p>
                <p> By: <em>{props.theAuthor}</em>
                    <a href={props.articleLink} target="_blank">Read more</a>
                </p>
                <p>{props.theDate}</p>
            </div>
         </section>
     );

};

export default post;