import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Oops! 404</h1>
                <section className="content-body">
                    I couldn't find that page, <Link to="/">go back</Link>
                </section>
            </article>
        </div>
    </Layout>
)

export default NotFoundPage
