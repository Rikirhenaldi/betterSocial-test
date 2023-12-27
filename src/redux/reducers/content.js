import { dataContent } from "../../dummyData/userContent";

const initialState = {
  dataContent: dataContent,
};

const content = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      const { contentId, commentData } = action.payload;

      // Temukan konten dengan ID yang sesuai
      const updatedDataContent = state.dataContent.map(contentItem => {
        if (contentItem.id === contentId) {
          // Tambahkan komentar baru ke dalam 'comment'
          return {
            ...contentItem,
            comment: contentItem.comment.concat(commentData),
          };
        }
        return contentItem;
      });

      return {
        ...state,
        dataContent: updatedDataContent,
      };
    }
    case "UPVOTE_POST":
      return {
        ...state,
        dataContent: state.dataContent.map((post) =>
          post.id === action.payload.contentId
            ? { ...post, votes: post.votes + 1 }
            : post
        ),
      };
    case "DOWNVOTE_POST":
      return {
        ...state,
        dataContent: state.dataContent.map((post) =>
          post.id === action.payload.contentId
            ? { ...post, votes: Math.max(0, post.votes - 1) }
            : post
        ),
      };
    default: {
      return state;
    }
  }
};

export default content;