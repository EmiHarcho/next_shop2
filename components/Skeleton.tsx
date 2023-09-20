import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props : any) => (
    <ContentLoader 
        speed={2}
        width={230}
        height={300}
        viewBox="0 0 230 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="576" cy="221" r="20" /> 
        <rect x="0" y="0" rx="0" ry="0" width="230" height="232" /> 
        <rect x="0" y="241" rx="0" ry="0" width="230" height="47" />
    </ContentLoader>
)

export default MyLoader