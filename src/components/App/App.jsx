import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import { Footer } from '../Footer/Footer';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Container>
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
      <Statistics stats={data} />

      <Section title="Friends List">
        <FriendList friends={friends} />
      </Section>

      <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>

      <Footer href="https://github.com/stzabiyaka" name="Stanislav Zabiyaka" />
    </Container>
  );
};
