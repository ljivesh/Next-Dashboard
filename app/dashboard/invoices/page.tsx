
import Link from "next/link";


export default ()=> {

    return <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
        Hello invoices
        <Link href="/dashboard/customers">Customers</Link>
    </p>
};