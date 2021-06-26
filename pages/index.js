import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a computer science engineering graduate who is currently working as a Front End Developer.
          I have done my training in data science using python (6 months).
          I've worked as an AWS support engineer for 6 months. I'm currently working as an Angular Front End Developer in the same company in an HRMS project .I'm also interested in learning new technologies.</p>
        <p>
          (LinkedIn : {' '}
          <a href="https://www.linkedin.com/in/arjunsunny999/">Arjunsunny999</a>)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Education and career</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (

           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <span> Last updated <Date dateString={date} /> </span>
           </small>
         </li>
         
          ))}
        </ul>
      </section>
      
    </Layout>
  )
}