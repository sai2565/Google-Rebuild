import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Response'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

function Search({ results }) {
    const router = useRouter();
    console.log(results);

    return (
        <div>
            <Head>
                <title>{router.query.searchterm} - Google Search</title>
                <link rel="icon" href="https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png" />
            </Head>
            <SearchHeader />
            <SearchResults results={results} />
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0"
    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.searchterm}&start=${startIndex}`
        ).then(response => response.json());

    //afyter the servers are rendered pass thye results
    return{
        props:{
            results: data
        }
    }    
}