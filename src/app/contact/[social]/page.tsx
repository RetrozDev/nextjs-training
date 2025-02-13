export default function SocialLinks ({params}:{
    params: { social: string }
}) {
    return (
        <h1>{params.social}</h1>
    )
}