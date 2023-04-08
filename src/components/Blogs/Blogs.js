import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='p-5 bg-warning'>
            <h1 className='mb-5'>Blogs</h1>
            <hr></hr>
            <div className='blogs text-start mt-5 w-75'>
                <div className='blog mb-5'>
                    <h3 className='blog-heading mb-3'>What is the purpose of React Router?</h3>
                    <h6>React Router enables "client side routing".</h6>

                    <h6>In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.</h6>

                    <h6>Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.</h6>

                    <h6>This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.</h6>

                    <h6>Client side routing is enabled by creating a Router and linking/submitting to pages with Link and Form.</h6>
                </div>

                <div className='blog mb-5'>
                    <h3 className='blog-heading mb-3'>How does Context API work?</h3>
                    <h6>React Context API, introduced in React v.16.3, allows us to pass data through our component trees from parent to child components, giving our components the ability to communicate and share data at different levels, without having to pass props down manually at each level. We can use React Context to avoid prop drilling. </h6>
                    <h6>Each component in Context is context-aware. Essentially, instead of passing props down through every single component on the tree, the components in need of a prop can simply ask for it, without needing intermediary helper components that only help relay the prop.</h6>
                </div>

                <div className='blog mb-5'>
                    <h3 className='blog-heading mb-3'>Discuss useRef hook.</h3>
                    <h5><li>Call useRef at the top level of your component to declare a ref.</li></h5>
                    <h5><li>Parameters</li></h5>
                    <h6><u className='text-danger'>initialValue:</u> The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.</h6>
                    <h5><li>Returns</li></h5>
                    <h6>useRef returns an object with a single property:</h6>
                    <h6><u className='text-danger'>current:</u> Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.</h6>
                    <h6>On the next renders, useRef will return the same object.</h6>
                    <h5><li>Usage</li></h5>
                    <h6>useRef returns a ref object with a single current property initially set to the initial value you provided.</h6>

                    <h6>On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.</h6>

                    <h6>Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property</h6>
                </div>
            </div>
        </div >
    );
};

export default Blogs;