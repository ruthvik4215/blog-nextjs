import Head from "next/head"
import Link from "next/link"
import styles from "../../components/Layout.module.css"
import Layout from "../../components/Layout"

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>This is my first post.</h1>
                <Link href="/">
                    <a className={styles.a}>Back to home</a>
                </Link>
            </Layout>
        </>
    )
}