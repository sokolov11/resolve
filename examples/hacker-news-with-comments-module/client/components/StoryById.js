import React from 'react'

import ConnectedStory from '../containers/ConnectedStory'
import ConnectedComments from '../containers/ConnectedComments'
import CommentsNotification from '../containers/CommentsNotification'

export class StoryById extends React.PureComponent {
  render() {
    const {
      match: {
        params: { storyId }
      }
    } = this.props

    if (!storyId) {
      return null
    }

    return (
      <div>
        <CommentsNotification treeId={storyId} />
        <ConnectedStory id={storyId} />
        <ConnectedComments treeId={storyId} />
      </div>
    )
  }
}

export default StoryById
