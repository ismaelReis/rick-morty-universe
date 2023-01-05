import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
