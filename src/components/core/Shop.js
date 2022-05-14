import { useSelector } from "react-redux"
import Layout from "./Layout"

function Shop() {
    const state = useSelector(state => state)
    return (
        <Layout title="商城" subTitle="这是商城">Shop {JSON.stringify(state)}</Layout>
    )
}

export default Shop