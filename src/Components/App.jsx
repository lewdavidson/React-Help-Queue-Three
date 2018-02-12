import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructior(props) {
    super(props);
    this.state = {
      masterTicketList : []
    };
    this.handleAddingNewTicketToList = this.HandleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    const newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});

  }
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
        <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAdddingNewTicketToList} />} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
