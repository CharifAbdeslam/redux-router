import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {Form, Button, Container} from 'reactstrap';

class NewPost extends Component {
  render() {
    const {handleSubmit, pristine, submitting} = this.props;
    return (<Container>
      <Form onSubmit={handleSubmit}>
        <label>Title</label>
        <Field type="text" name="title" component="input"/>
        <label>Categories</label>
        <Field type="text" name="categories" component="input"/>
        <label>Content</label>
        <Field name="content" component="textarea"/>
        <Button disabled={pristine || submitting}>Submit</Button>
      </Form>
    </Container>);
  }
}
NewPost.propTypes={
  router:PropTypes.object
}
export default reduxForm({form: 'NewPost'})(NewPost)
