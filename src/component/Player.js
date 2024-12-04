import Card from 'react-bootstrap/Card';

const Player = ({ imageURL, name, team, nationality, jerseyNumber, age }) => {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>Team: {team}</Card.Title>
        <Card.Title>Nationality: {nationality}</Card.Title>
        <Card.Title>Number: {jerseyNumber}</Card.Title>
        <Card.Text>
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Player.defaultProps = {
  imageURL: "https://th.bing.com/th/id/OIP.jhaLkutXYEZewlQHO861fAHaKN?w=184&h=254&c=7&r=0&o=5&pid=1.7",
  name: "player",
  age: "20",
  team: 'free agent',
  nationality: "tunisien",
  jerseyNumber: 7
}

export default Player;