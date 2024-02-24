import BalanceInsight from "@/components/organisms/BalanceInsight";
import NavBar from "@/components/organisms/NavBar";
import CreditCard from "@/components/organisms/CreditCard";
import DashboardTemplate from "@/components/templates/DashboardTemplate";
import Todo from "@/components/organisms/Todo";
import Chatting from "@/components/organisms/Chatting";
import TransactionList from "@/components/organisms/TransactionList";
import TransactionInsight from "@/components/organisms/TransactionInsight";
import Aside from "@/components/organisms/Aside";

export default function Home() {
  return (
    <DashboardTemplate navBar={<NavBar />} aside={<Aside />}>
      <div className='font-semibold text-2xl mb-2'>Hello, John Doe</div>
      <div className='text-sm mb-5'>View and control your finances here!</div>

      <div className='grid gap-5'>
        <div className='grid grid-cols-5 gap-5'>
          <div className='col-span-3'>
            <BalanceInsight />
          </div>
          <div className='col-span-2'>
            <CreditCard />
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <Todo />
          <Chatting />
        </div>

        <div className='grid grid-cols-3 gap-5'>
          <div className='col-span-2'>
            <TransactionList />
          </div>
          <TransactionInsight />
        </div>
      </div>
    </DashboardTemplate>
  );
}
