import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function aboutus() {
    return (
    <div className={styles.container}>
      <Head>
        <title>about us - Vincent Mary School of Science and Technology</title>
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

      <Link href="/" passHref> 
      <Image src="/home_button.png"
        width={150}
        height={150}
      />
      </Link>
    </div>
    )
}