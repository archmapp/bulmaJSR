import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Form, Icon } from 'react-bulma-components'
import { Button } from 'react-bulma-components'

const { Input, Field, Control, Label } = Form

const CustomLink = ({ to }) => {
	return (
		<Button to={to} renderAs={Link}>
			My react router link
		</Button>
	)
}

function App() {
	useEffect(() => {}, [])

	return (
		<>
			<Button color="primary">My Bulma button</Button>

			<Form.Field>
				<Form.Label>Name</Form.Label>
				<Form.Control>
					<Form.Input
						placeholder="Username"
						name="name"
						value={Form.name}
						// onChange={update}
					/>
					<Icon align="left">
						<i className="github" />
					</Icon>
				</Form.Control>
			</Form.Field>
			<Form.Field>
				<Form.Label>Password</Form.Label>
				<Form.Control>
					<Form.Input
						placeholder="Password"
						name="password"
						type="password"
						value={Form.password}
						// onChange={update}
					/>
					<Icon align="left">
						<i className="github" />
					</Icon>
				</Form.Control>
			</Form.Field>
			<Button.Group>
				<Button
					fullwidth
					rounded
					color="primary"
					onClick={() => console.log(Form)}
				>
					Login
				</Button>
			</Button.Group>
		</>
	)
}

export default App
