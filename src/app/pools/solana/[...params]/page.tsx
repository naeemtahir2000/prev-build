"use client"

import { usePathname, useParams } from "next/navigation"
export default function SolanaPools() {
    const { params } = useParams()
    const pathname = usePathname()

    console.log("params", params)

    return (
        <>
            <h1>Solana Docs</h1>
            <h3>Pathname: {pathname}</h3>
            <h3>Params:
                {Object.entries(params).map(([key, value]) => (
                    <p key={key}>{key}: {value}</p>
                ))}
            </h3>
        </>
    )
}