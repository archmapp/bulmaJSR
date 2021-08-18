// import 'react-bulma-components/dist/react-bulma-components.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { useForm, Controller } from 'react-hook-form'
import { Form, Section, Button, Box, Heading } from 'react-bulma-components'

export default function App() {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm()
	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<Section>
			<Box>
				<Heading>Form</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Form.Field>
						<label>FirstName</label>
						<Form.Control>
							<Controller
								render={({ field }) => (
									<input
										onChange={(e) => field.onChange(transform.output(e))}
										value={transform.input(field.value)}
									/>
								)}
							/>

							{/* <Controller
								as={Form.Input}
								name="FirstName"
								placeholder="FirstName"
								defaultValue=""
								control={control}
								rules={{ required: true, maxLength: 10 }}
							/> */}
							{/* <Controller
								as={Form.Input}
								name="FirstName"
								placeholder="FirstName"
								defaultValue=""
								control={control}
								rules={{ required: true, maxLength: 10 }}
							/> */}
						</Form.Control>
						<Form.Help color="danger">
							{errors.FirstName && 'This field is required'}
						</Form.Help>
					</Form.Field>
					{/* <Form.Field>
						<label>LastName</label>
						<Form.Control>
							<Controller
								as={Form.Input}
								name="LastName"
								control={control}
								defaultValue=""
								placeholder="LastName"
							/>
						</Form.Control>
					</Form.Field>
					<Form.Field>
						<Form.Control>
							<Button fullwidth={true}>submit</Button>
						</Form.Control>
					</Form.Field> */}
				</form>
			</Box>
		</Section>
	)
}
