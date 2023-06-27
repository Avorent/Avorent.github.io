export const prerender = true;

export const load = ({url: { pathname }}) => {
    let paths = (pathname).split('/').slice(1)
    /**
     * @type {string}
     */
    let accumulator;
	let hrefs = paths
    .map((path, i, arr) => {
        accumulator = [accumulator, path].join("/")
        return accumulator
    })

    return {
        paths, hrefs
    }
}