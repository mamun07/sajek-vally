// Including React Package
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NavBar } from './elements/header/NavBar'
// Including Elements
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import { Footer } from './elements/footer/Footer'
import { Container } from 'react-bootstrap'

export const Routers = () => {
    return (
        <>
            <Container fluid className="p-0 sultani-dine-navbar">
                <Router>
                    {/* Theme Header area */}
                    <header className="main-header-area">
                        <NavBar/>
                    </header>

                    {/* Theme Main content area */}
                    <main className="main-content-area">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about-us" component={About}/>
                            <Route exact path="/contact-us" component={Contact}/>
                        </Switch>
                    </main>

                    {/* Theme footer area */}
                    <footer className="main-footer-area">
                        <Footer/>
                    </footer>
                </Router>
            </Container>
        </>
    )
}
