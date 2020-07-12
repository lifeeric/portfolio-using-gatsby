import * as React from "react"
import NProgress from "nprogress"

export default function App() {
    React.useEffect(() => {
        NProgress.start();
    });

    return <h1>NProgress</h1>;
}


