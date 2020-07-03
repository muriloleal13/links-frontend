import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../../Layouts/Manage/';
import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';
import { linkEdit, linkUpdate } from '../../../../actions/LinkActions';
import { getFormData } from '../../../../helpers/form';

const Edit = ({ link, linkEdit, linkUpdate }) => {
  const { id } = useParams();

  useEffect(() => {
    linkEdit(id);
  }, [id, linkEdit]);

  const submitHandler = (e) => {
    e.preventDefault();
    linkUpdate(id, getFormData(e));
  };

  return (
    <Layout>
      <h1>Edit Link</h1>
      <div>
        <form onSubmit={submitHandler}>
         <FormGroup label="Label" name="label" data={link} type="text"/>
         <FormGroup label="Url" name="url" data={link} type="text"/>
          <FormCheck label="Is Social" name="isSocial" data={link}/>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { link: state.link.link };
};

export default connect(mapStateToProps, { linkEdit, linkUpdate })(Edit);