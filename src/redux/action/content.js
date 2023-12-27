export const addComment = (contentId, commentData) => {
    return {
      type: "ADD_COMMENT",
      payload: { contentId, commentData },
    };
  };

  export const addUpvote = (contentId) => {
    return {
      type: "UPVOTE_POST",
      payload: { contentId },
    };
  };
  
  export const addDownvote = (contentId) => {
    return {
      type: "DOWNVOTE_POST",
      payload: { contentId },
    };
  };