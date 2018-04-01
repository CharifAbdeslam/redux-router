import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form, Button, Label, FormGroup, Container} from 'reactstrap';
class NewPost extends Component {
  render() {
    const {handleSubmit, pristine, submitting} = this.props;
    return (<Container>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Field type="text" name="title" component="input"/>
        </FormGroup>
        <FormGroup>
          <Label>Categories</Label>
          <Field type="text" name="categories" component="input"/>
        </FormGroup>
        <FormGroup>
          <Label>Content</Label>
          <Field name="content" component="textarea"/>
        </FormGroup>
        <Button disabled={pristine || submitting}>Submit</Button>
      </Form>
    </Container>);
  }
}
export default reduxForm({
  form: 'NewPost'
})(NewPost)
