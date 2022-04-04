import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const questions = [
        {
            id: 1,
            question: 'What is context api?',
            answer: 'Context api is a way to share props to a component without passing the props through all of its parent components. Passing through all of the parent components is known as prop drilling. Contenxt api porvides an alternate way to pass props to child components.'
        },
        {
            id: 2,
            question: 'What are semantic tags?',
            answer: 'Semantic tags are tags that have real meaning. They are normal english workds that clearly describe the tags meaning. For example, navbar, article, section etc.'
        },
        {
            id: 3,
            question: 'Difference between inline, block and inline-block elements.',
            answer: 'By default inline elements take the minimum width to show the content. On the other hand, block elements takes up the entire screen as width. If we have two inline elements one after other in the code, they will appear side by side in the bowser where two block elements will appear in two lines. Inline block elements are elements that look like inline elements but can have properties like block elements.'
        }
    ]
    return (
        <div className='w-3/4 mx-auto'>
            {
                questions.map(question => <Blog 
                key={question.id} 
                question={question}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;