import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div
      className={styles.wrapper}
    >
      <Link href={"/locations"}>
        <Image
          className={styles.portal}
          src="/portal.svg"
          alt="Portal"
          width={800}
          height={600}
          priority
        />
      </Link>
    </div>
  )
}
