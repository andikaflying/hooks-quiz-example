import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import FontAwesome from "../UiStyle/FontAwesome";

import './style.scss';

const Comments = ({comments}) => {
    return(
        <Grid className="commentArea">
            <h2>3 Comments on this</h2>
            {comments.map(item => {
                return(
                    <Grid key={item.id} className="commentList">
                        <Grid className="commentCard">
                            <Grid className="thumb">
                                {item.name.split(' ').map(function(item){return item[0]}).join('')}
                            </Grid>
                            <Grid className="content">
                                <Grid className="cmntMetaTop">
                                    <h4>{item.name}</h4>
                                    <span>{item.created_at}</span>
                                </Grid>
                                <p>{item.comment}</p>
                                <Grid className="replyBtn">Reply <FontAwesome name="reply" /></Grid>
                            </Grid>
                        </Grid>
                        {item.reply ? <Fragment>
                            {item.reply.map(item => {
                                return(
                                    <Grid  key={item.id} className="commentCard ml-80">
                                        <Grid className="thumb">
                                            {item.name.split(' ').map(function(item){return item[0]}).join('')}
                                        </Grid>
                                        <Grid className="content">
                                            <Grid className="cmntMetaTop">
                                                <h4>{item.name}</h4>
                                                <span>{item.created_at}</span>
                                            </Grid>
                                            <p>{item.comment}</p>
                                            <Grid className="replyBtn">Reply <FontAwesome name="reply" /></Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Fragment> : ''}
                    </Grid>
                )
            })}
        </Grid>
    )
};

export default Comments;