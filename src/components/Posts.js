import React, {Component} from 'react';

class Posts extends Component{
  
   state = {
      posts: []
   }

   async componentDidMount() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();

      console.log(data);
      this.setState({posts: data})
   }

   render() {
      return (
         this.state.posts.map( (p) => 
            <div key={p.id}>
               {p.title}
            </div>
         )
      );
   }
}

export default Posts;
