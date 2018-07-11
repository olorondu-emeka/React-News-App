import React, { Component } from 'react';
import Post from './Post/Post';
import axios from 'axios';
import classes from './Posts.css';
import Dropdown from '../Dropdown/Dropdown';

 class Posts extends Component{
     state = {
         posts: null,
         currentSource: 'al-jazeera-english'
     };

     // the global tracking variable
      theTracker = 0;
     hasLoaded = true;

     componentDidMount(){
         let currentSource = this.state.currentSource;

         //implement the GET request from the API
         axios.get(`https://newsapi.org/v2/top-headlines?sources=${currentSource}&pageSize=10&apiKey=79b9aeefb0ae4266ae4fec907c8c2110`)
             .then(response => {
                 this.setState({posts: response.data.articles});
             }).catch(error => {
                 console.log(error);
         });
     }

     componentDidUpdate() {
         let currentSource = this.state.currentSource;

         if (this.theTracker > 0)
         {
             //implement the GET request from the API
             axios.get(`https://newsapi.org/v2/top-headlines?sources=${currentSource}&pageSize=10&apiKey=79b9aeefb0ae4266ae4fec907c8c2110`)
                 .then(response => {
                     this.hasLoaded = true;
                     this.setState({posts: response.data.articles});
                 }).catch(error => {
                 console.log(error);
             });
             //console.log('updated api');

             // reset tracker
             this.theTracker = 0;
         }

         //console.log('updated components');
     }

    optionsChangeHandler = (event) => {
         this.theTracker += 2;
         this.hasLoaded = false;
         this.setState({ currentSource: event.target.value });
    };

     render(){
         let posts = <div className={classes.Loader}>Loading...</div>;
         let loadStatus = this.hasLoaded;
         let postTitle = null;

         console.log(loadStatus);

         if (this.state.posts)
         {
             postTitle = this.state.posts[0].source.name;

             //create a copy of this.state.posts
             let postsArray = [...this.state.posts];

             if (loadStatus){
                 posts = postsArray.map(function(post, index){

                     //modify dateTime object in posts array to give date and time only
                     let aDate = post.publishedAt.split('');
                     aDate.splice(10, 1, ' | ');
                     aDate.splice(19);

                     return (<Post
                         theTitle={post.title}
                         theContent={post.description}
                         theAuthor={post.author ? post.author : post.source.name}
                         articleLink={post.url}
                         theDate={aDate}
                         theImage={post.urlToImage}
                         key={`article${index}`}
                     />);
                 });

             } //end if

         }

         return (
             <div className={classes.Posts}>
                 <p className={classes.SubTitle}>{postTitle}</p>
                 <div className={classes.PostHeading}>
                     <p>Select a News Outreach: </p>
                     <Dropdown changed={this.optionsChangeHandler}/>
                 </div>
                 {posts}
             </div>
         );
     } //end render method
 }

 export default Posts;