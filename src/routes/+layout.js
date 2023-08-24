export const prerender = true;

export const load = ({url: { pathname }}) => {


    console.log(pathname)
    if(pathname && pathname == "/"){
        return {paths: "", hrefs: ""}
    }

    return generateBreadcrumbs(pathname)
}

const generateBreadcrumbs = (/** @type {string} */ pathname) =>{
    let paths = (pathname).split('/').slice(1)
    /**
     * @type {string}
     */
    let accumulator;
	let hrefs = paths
    .map((path) => {
        accumulator = [accumulator, path].join("/")
        return accumulator
    })

    paths.unshift("home")
    hrefs.unshift("/")

    console.log(paths, hrefs)

    return {
        paths, hrefs
    }
}