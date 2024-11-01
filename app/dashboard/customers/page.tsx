import { Metadata } from "next";
import { lusitana } from '@/app/ui/fonts';
import Search from "@/app/ui/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import Table from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page(){
    const customers = await fetchFilteredCustomers('');
    return (
        <Suspense fallback={<InvoicesTableSkeleton />}>
            <Table customers={customers} />
        </Suspense>
    );
}