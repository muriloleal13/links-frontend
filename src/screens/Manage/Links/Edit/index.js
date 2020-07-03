import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../../Layouts/Manage/';
import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';
import { linkEdit } from '../../../../actions/LinkActions';

const Edit = ({ link, linkEdit }) => {
  const { id } = useParams();

  useEffect(() => {
    linkEdit(id);
  }, [id, linkEdit]);
  return (
    <Layout>
      <h1>Edit Link</h1>
      <div>
        <form>
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

export default connect(mapStateToProps, { linkEdit })(Edit);