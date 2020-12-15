import Head from 'next/head'

const NextHead = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta property="og:url" content={props.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.fbImg} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>
    )
}

export default NextHead