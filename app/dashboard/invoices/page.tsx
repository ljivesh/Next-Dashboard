
import Link from "next/link";


const Page = ()=> {

    return <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
        Hello invoices
        <Link href="/dashboard/customers">Customers</Link>
    </p>
};

export default Page;