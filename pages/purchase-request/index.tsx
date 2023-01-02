import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '@/layouts/DefaultLayout'
import { PurchaseRequestCase } from '@/useCases/purchaseRequestCase'

const PurchaseRequest: NextPage = () => {
  return (
    <>
    
      <Head>
        <title>Solicitação de Compra</title>
        <meta name="keywords" content="games" />
      </Head>
      <DefaultLayout title='default layout'>
          <div className='h-screen p-8'>
            <PurchaseRequestCase />
          </div>
      </DefaultLayout> 
    </>
  )
}

export default PurchaseRequest