import { Helmet } from "react-helmet-async";

export default function SEO({
    title,
    description,
    image,
    url
}) {
    return (
        <Helmet>

            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content="
        artesanato,
        cultura,
        mulheres artesãs,
        gastronomia artesanal,
        cursos,
        feiras culturais,
        Enlace das Arteiras,
        Brasília,
        DF,
        economia criativa
        "
            />

            <meta
                name="author"
                content="Enlace das Arteiras"
            />

            {/* GOOGLE */}

            <meta name="google-site-verification" content="v2SOmgSIpE-BDdkj8hIj34XerelTU_jWMPSL2tWbcUQ" />

            {/* OPEN GRAPH */}

            <meta property="og:type" content="website" />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:image"
                content={image}
            />

            <meta
                property="og:url"
                content={url}
            />

            {/* TWITTER */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />

        </Helmet>
    );
}