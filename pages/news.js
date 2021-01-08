import Head from 'next/head'
import styles from '../styles/News.module.css'
import Image from 'next/image'
import Link from 'next/link'
import posts from '../db/posts.json'

export default function news() {
    return (
    <div className={styles.container}>
      <Head>
        <title>News - Vincent Mary School of Science and Technology</title>
        <link rel="icon" href="/vms_logo.png" />
      </Head>
      
      <div className={styles.topnav}>
      <Link href="/news">
        <a>NEWS</a>
      </Link>
        <a>PROGRAMS</a>
        <a>LABATORIES</a>
      <Link href="/project">
        <a>PROJECT</a>
      </Link>
      <Link href="/spotlight">
        <a>SPOTLIGHT</a>
      </Link>
      <Link href="/aboutus">
        <a>ABOUT US</a>
      </Link>
      </div>

      <div className={styles.content}>
        <a><h1> NEWS </h1></a>
      </div>


      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://www.scitech.au.edu/News/Details?q=4SIqe/Dr9K0PdgvOwdDA1w==" className={styles.card}>
            <image><Image src="/News01.jpg" width="250" height="250"/></image>
            <h3><a> AU Digital Marketing Workshop#5 by the ISL team </a></h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://www.scitech.au.edu/News/Details?q=bPIM0e77SkQg9Sas8JpRww==" className={styles.card}>
            <image><Image src="/News02.jpg" width="250" height="250"/></image>
            <h3><a> Collaboration with True Corpoeration </a></h3>
            <p>Initiated by VMS, True Corportation and Assumption University have signed a Memorandum of Understanding in corporation in establishing and operating TRUE LAB on campus.</p>
          </a>

          <a
            href="https://www.scitech.au.edu/News/Details?q=FdVnijDNHjLdPcIsvq+0Vg==" className={styles.card}>
            <image><Image src="/News03.jpg" width="250" height="250"/></image>
            <h3><a> VMS Students Joining Computer Vision Tech Company, BAKSTERS </a></h3>
            <p>Baksters visual analytics solutions on exhibit at BITEC, Saha Group Fair.</p>
          </a>
        </div>
        <Link href="/" passHref> 
        <Image src="/home_button.png"
        width={200}
        height={200}
      />
      </Link>
      </main>
    </div>
    )
}