import React from 'react';
import { Container } from 'react-bootstrap';
import "./Blog.css";
import img from "./Images/01.242d2f2a.png";
import img1 from "./Images/02.9b270bfd.png";
import img2 from "./Images/03.6d8aa259.png";
import { FaUser } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { MdBeachAccess } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Blog = () => {
    return (
        <div>
            <Container>
                <div className='top-header'>
                    <h1 className='heading'>my <span>blogs</span></h1>
                    <span className='top-span'>posts</span>
                </div>
            </Container>
            <Container>
                <div className="row middle-margin">
                    <div className="col-lg-4 col-md-6  card-s mb-3">
                        <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div class="card" >
                                <img src={img} class="card-img-top" alt="..." />
                                <div class="card-body section-card">
                                    <h5 class="card-title">Swag by HactoberFest</h5>
                                    <p class="card-text text-secondary">To support open-source contribution a program 'HactoberFest' is held by DEV and Digital Ocean in col
                                    </p>
                                </div>
                            </div>
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                                <div class="modal-content blog-modal">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close blog-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className='top-header'>
                                            <h1 className='heading'>post <span>details</span></h1>
                                            <span className='top-span'>posts</span>
                                        </div>
                                        <ul className='blog-list'>
                                            <li> <FaUser className='list-icons' /> Talha </li>
                                            <li> <FaCalendarCheck className='list-icons' /> 21 April 2023 </li>
                                            <li> <MdBeachAccess className='list-icons' />hacktoberfest</li>
                                            <h1>Swag by HactoberFest</h1>
                                        </ul>
                                        <div className='blog-image'>
                                            <img src={img} alt="" />
                                            <p>To support open-source contribution a program 'HactoberFest' is held by DEV and Digital Ocean in collaboration with Github every year. GitHub is a version control platform where you can share your projects and can also contribute to other projects, for that you have to open a pull request.
                                            </p>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='modal-icon'>
                                                < RiDoubleQuotesL />
                                            </div>
                                            <div className='blog-image'>
                                                <p className='me-4 text-white'>
                                                    HactoberFest is an event based on opening 4 pull request to encourage open source contribution. And as an award by DEV and Digital Ocean swags are given to them. These swags includes tree/t-shirt, stickers and badges.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-image">
                                            <p className='m-3 text-white'>To participate, register at the official site: hacktoberfest.digitalocean.com Make sure you are connected with your GitHub account. Then, submit at least four pull-request (PRs) to any public GitHub repository.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6  mb-3 ">
                        <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <div class="card first-card">
                                <div>
                                    <img src={img1} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body section-card">
                                    <h5 class="card-title">Goodbye Create React App</h5>
                                    <p class="card-text text-secondary">React is a popular JavaScript library that helps you build user interfaces for websites and apps. Wh
                                    </p>
                                </div>
                            </div>
                        </button>
                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                                <div class="modal-content blog-modal">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close blog-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className='top-header'>
                                            <h1 className='heading'>post <span>details</span></h1>
                                            <span className='top-span'>posts</span>
                                        </div>
                                        <ul className='blog-list'>
                                            <li> <FaUser className='list-icons' /> Talha </li>
                                            <li> <FaCalendarCheck className='list-icons' /> 21 April 2023 </li>
                                            <li> <MdBeachAccess className='list-icons' />React</li>
                                            <h1>Goodbye Create React App</h1>
                                        </ul>
                                        <div className='blog-image'>
                                            <img src={img1} alt="" />
                                            <p>React is a popular JavaScript library that helps you build user interfaces for websites and apps. When starting a new project with React, you may wonder if you should use a framework or not. React just released its new documentation React Docs and the creators of React recommend using a framework, and in this article, we'll see why.
                                            </p>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='modal-icon'>
                                                < RiDoubleQuotesL />
                                            </div>
                                            <div className='blog-image'>
                                                <p className='me-4 text-white'>
                                                    Frameworks are pre-built sets of tools and features that can help you build websites and apps faster and more efficiently. They provide features like routing (helping you move between different parts of your site or app), data fetching (helping you get data from a server), and generating HTML (helping your site or app load faster).
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-image">
                                            <p className='m-3 text-white'>While you can use React without a framework, building a project fully with React can lead to problems as your project grows. As you add more features, your JavaScript code can become larger, leading to slower load times. You may also need to figure out how to split code for every route individually or encounter server-client network waterfalls that make your app feel very slow. This is why Svelte has SvelteKit, Vue has Nuxt, and other frameworks exist to solve these problems.</p>
                                            <p className='m-3 text-white'>React frameworks solve these problems by default, with no extra work from your side. They let you start with a lean codebase and scale your app with your needs. Each React framework has a community, so finding answers to questions and upgrading tooling is easier. Frameworks also give structure to your code, helping you and others retain context and skills between different projects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6  mb-3 ">
                        <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <div class="card second-card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body section-card">
                                    <h5 class="card-title">Web Developer? Terms you should understand!</h5>
                                    <p class="card-text text-secondary">The Tech Industry is full of peculiar words, to which anyone can get confused. Web development is no
                                    </p>
                                </div>
                            </div>
                        </button>
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                                <div class="modal-content blog-modal">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close blog-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className='top-header'>
                                            <h1 className='heading'>post <span>details</span></h1>
                                            <span className='top-span'>posts</span>
                                        </div>
                                        <ul className='blog-list'>
                                            <li> <FaUser className='list-icons' /> junaid </li>
                                            <li> <FaCalendarCheck className='list-icons' /> 21 April 2023 </li>
                                            <li> <MdBeachAccess className='list-icons' />webdev,codenewbie</li>
                                            <h1>Web Developer? Terms you should understand!</h1>
                                        </ul>
                                        <div className='blog-image'>
                                            <img src={img2} alt="" />
                                            <p>The Tech Industry is full of peculiar words, to which anyone can get confused. Web development is no rule-breaking, and if you need to make it as a programmer, you need to be having some knowledge of the industry lingo. This list will give you a good introduction to some of the most important terms that you’ll come across when working in web development.
                                            </p>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='modal-icon'>
                                                < RiDoubleQuotesL />
                                            </div>
                                            <div className='blog-image'>
                                                <p className='me-4 text-white'>
                                                    Code: Code is essentially what web developers write using programming languages. Bug: A bug is an error that prevents a website or app from running as it should. Debugging: Debugging is the process of identifying and dealing with BUGs.Debugging is a multistep process: the developer locates the problem, isolates the source and then gets to work on fixing it. API:“Application Program Interface” An API enables two different programs to communicate with each other by making some parts of the website code available to developers.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container >


        </div>
    );
}

export default Blog;
