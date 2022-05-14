import { useSelector } from "react-redux"
import Layout from "./Layout"

function Home() {
    const state = useSelector(state => state)
    return <Layout title="精选商城" subTitle="尽情享受">home {JSON.stringify(state)}</Layout>
}

export default Home
