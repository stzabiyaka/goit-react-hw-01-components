
import {Section} from "components/section/section";
import {PageTitle} from "components/page-title/page-title";
import {Profile} from "components/social-profile/profile";
import {Statistics} from "components/statistics/statistics";
import {FriendList} from "components/friend-list/friend-list";
import {TransactionHistory} from "components/transactions/transaction-history";
import { Footer } from "./footer/footer";
import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(230, 230, 230)',
      }}
    >
      <PageTitle title="React Homework #01 - Components" />

      <Section title="Social Net Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} 
        />
      </Section>

      <Statistics title="Upload stats" stats={data} />
      
      <Section title="Friends List">
        <FriendList friends={friends} />
      </Section>
      
      <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>

      <Footer />
    </div>
  );
};