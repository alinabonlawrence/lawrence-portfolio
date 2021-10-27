// React Library
import React from 'react'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function AboutMe(){
	return(
		<Container className="my-5">
			<Card>
			  <Card.Body>
			    <Card.Title>About Me</Card.Title>
			    <Card.Text>
			     Hi! I'm Lawrence, a full stack developer based in Cebu. I am encouraged to study programming because it is an exciting career which you'll always have the opportunity to interact with new tools and learn new skills, keeping you engaged in your career.
			    </Card.Text>
			  </Card.Body>
			</Card>
		</Container>
	)
}