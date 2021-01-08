import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page - Vincent Mary School of Science and Technology</title>
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
        
  
        <video poster="fFrame_bg.png" autoPlay muted loop>
          <source src="VMS_bg.mp4" type="video/mp4"></source>
        </video>

        
        <main className={styles.main}>
        <Image src="/vms_logo.png" width={250} height={250}/>
        <h1 className={styles.title}>
          VINCENT MARY
        </h1>

        <p className={styles.description}>
          SCHOOL OF SCIENCE AND TECHNOLOGY
        </p>

      </main>




      <footer className={styles.footer}>
          <a>Powered by {' '} </a>
          <img src="/vms_logo.png" alt="Vincent Mary" className={styles.logo} />
          <a>Vincent Mary</a>
      </footer>
    </div>
  )
}
