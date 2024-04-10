import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends {
    [key: string]: unknown;
  },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {
    input: string;
    output: string;
  };
  String: {
    input: string;
    output: string;
  };
  Boolean: {
    input: boolean;
    output: boolean;
  };
  Int: {
    input: number;
    output: number;
  };
  Float: {
    input: number;
    output: number;
  };
};

export type AddBiographyInput = {
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type AddSkillDefinedListInput = {
  nameList: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Album = {
  __typename?: 'Album';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Array<Maybe<Post>>;
  updatedAt: Scalars['String']['output'];
  userId: User;
};

export type AlbumInfoInput = {
  albumId: Scalars['ID']['input'];
  currentUserId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Array<Maybe<Post>>;
  updatedAt: Scalars['String']['output'];
};

export type CategoryInfoInput = {
  categoryId: Scalars['ID']['input'];
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastMessageAt: Scalars['String']['output'];
  messages: Array<Maybe<Message>>;
  userIDs: Array<Maybe<User>>;
};

export type ChatInfoByUserIdInput = {
  userIDs: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type ChatInfoInput = {
  chatId: Scalars['ID']['input'];
};

export type Comment = {
  __typename?: 'Comment';
  child?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  downVoteUserlist: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  postId: Post;
  storyId: Story;
  upVoteUserlist: Array<Maybe<Scalars['String']['output']>>;
  userId: User;
  votes: Scalars['Int']['output'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Comment>;
};

export type CommentPagination = {
  __typename?: 'CommentPagination';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
};

export type Contest = {
  __typename?: 'Contest';
  contestImageURL: Scalars['String']['output'];
  contestPrizeList: Array<Maybe<Contest_Prize>>;
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isFinished: Scalars['Boolean']['output'];
  joinedUserIds: Array<Maybe<User>>;
  name: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
};

export type ContestInfoInput = {
  contestId: Scalars['ID']['input'];
};

export type ContestPostsInpout = {
  contestId: Scalars['ID']['input'];
};

export type Contest_Prize = {
  __typename?: 'Contest_Prize';
  contestId: Contest;
  id: Scalars['ID']['output'];
  prizeImageURL: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userId: User;
};

export type CreateAlbumInput = {
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateChatInput = {
  currentUserId: Scalars['ID']['input'];
  firstMessage: Scalars['String']['input'];
  isImage: Scalars['Boolean']['input'];
  userIDs: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  parentCommentId?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  storyId?: InputMaybe<Scalars['ID']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateContestInput = {
  contestImageURL: Scalars['String']['input'];
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type CreateContestPrizeInput = {
  prizeId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMessageInput = {
  chatId: Scalars['ID']['input'];
  isImage: Scalars['Boolean']['input'];
  message: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreatePostInput = {
  ISO?: InputMaybe<Scalars['String']['input']>;
  albumId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aperture?: InputMaybe<Scalars['String']['input']>;
  camera?: InputMaybe<Scalars['String']['input']>;
  caption: Scalars['String']['input'];
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contestId: Scalars['String']['input'];
  copyRight?: InputMaybe<Scalars['String']['input']>;
  focalLength?: InputMaybe<Scalars['String']['input']>;
  imageURL: Scalars['String']['input'];
  lens?: InputMaybe<Scalars['String']['input']>;
  postViewStatus: ViewStatus;
  shutterSpeed?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  takenWhen?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateReportInput = {
  postId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  userReported: Scalars['ID']['input'];
};

export type CreateStoryInput = {
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content: Scalars['String']['input'];
  images: Array<InputMaybe<Scalars['String']['input']>>;
  storyViewStatus: ViewStatus;
  tag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateTagData = {
  name: Array<InputMaybe<Scalars['String']['input']>>;
};

export type CreateUserInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  backgroundImageURL?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hashPassword: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profileImageURL?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAlbumInput = {
  albumId: Scalars['ID']['input'];
};

export type DeleteAllReturnType = {
  __typename?: 'DeleteAllReturnType';
  count: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type DeleteChatInput = {
  chatId: Scalars['ID']['input'];
};

export type DeleteCommentInput = {
  commentId: Scalars['ID']['input'];
};

export type DeleteContestInput = {
  contestId: Scalars['ID']['input'];
};

export type DeleteMessageInput = {
  reportId: Scalars['ID']['input'];
};

export type DeleteNotiInput = {
  notiId: Scalars['ID']['input'];
};

export type DeletePostInput = {
  postId: Scalars['ID']['input'];
};

export type DeleteReportInput = {
  reportId: Scalars['ID']['input'];
};

export type DeleteStoryInput = {
  storyId: Scalars['ID']['input'];
};

export type DeleteUserInput = {
  userId: Scalars['ID']['input'];
};

export type EndContestInput = {
  contestId: Scalars['ID']['input'];
};

export type EndorseSkillInput = {
  endorsementId: Scalars['ID']['input'];
  endorserUserId: Scalars['ID']['input'];
};

export type Endorsement = {
  __typename?: 'Endorsement';
  endorsers?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID']['output'];
  owner?: Maybe<User>;
  skill?: Maybe<Skill>;
};

export type ExplorePostsInput = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Follower = {
  __typename?: 'Follower';
  id: Scalars['ID']['output'];
  userFollower: Array<Maybe<User>>;
  userId: User;
};

export type Following = {
  __typename?: 'Following';
  id: Scalars['ID']['output'];
  userFollowing: Array<Maybe<User>>;
  userId: User;
};

export type GetCommentsByPostIdInput = {
  postId: Scalars['ID']['input'];
};

export type GetCommentsByStoryIdInput = {
  storyId: Scalars['ID']['input'];
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageInfoId: ImageInfo;
  postConnection: Post;
  updatedAt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ImageInfo = {
  __typename?: 'ImageInfo';
  ISO?: Maybe<Scalars['String']['output']>;
  aperture?: Maybe<Scalars['String']['output']>;
  camera?: Maybe<Scalars['String']['output']>;
  copyRight?: Maybe<Scalars['String']['output']>;
  focalLength?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageId: Image;
  lens?: Maybe<Scalars['String']['output']>;
  shutterSpeed?: Maybe<Scalars['String']['output']>;
  takenWhen?: Maybe<Scalars['String']['output']>;
};

export type InteractPostInput = {
  isLiked: Scalars['Boolean']['input'];
  likedUserId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
};

export type InteractStoryInput = {
  isLiked: Scalars['Boolean']['input'];
  likedUserId: Scalars['ID']['input'];
  storyId: Scalars['ID']['input'];
};

export type InterestCategoriesInput = {
  categoryIds: Array<InputMaybe<Scalars['String']['input']>>;
  userId: Scalars['ID']['input'];
};

export type JoinContestInput = {
  contestId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Level = {
  __typename?: 'Level';
  currentLevel: Scalars['Int']['output'];
  currentXP: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  userId: User;
};

export type Message = {
  __typename?: 'Message';
  chatId: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isImage: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  userId: User;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  edges: Array<MessageEdge>;
  pageInfo: PageInfo;
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Message>;
};

export type MessageInfoInput = {
  messageId: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _TEST_MUTATION: Scalars['Int']['output'];
  addBiography: User;
  addInterestCategories: User;
  addNewPhotoToAlbum: Album;
  addSkillDefinedList?: Maybe<Scalars['String']['output']>;
  checkSimilarPosts: CheckSimilarPostsDetails;
  createAlbum: Album;
  createCategory: Category;
  createChat: Chat;
  createComment: Comment;
  createContest: Contest;
  createMessage: Message;
  createPost: Post;
  createReport: Report;
  createStory: Story;
  createTag: Array<Maybe<Tag>>;
  createUser: User;
  deleteAlbum: Album;
  deleteAllAlbum: DeleteAllReturnType;
  deleteAllChat: DeleteAllReturnType;
  deleteAllMessage: DeleteAllReturnType;
  deleteAllNoti: DeleteAllReturnType;
  deleteAllPost: DeleteAllReturnType;
  deleteAllReport: DeleteAllReturnType;
  deleteAllStory: DeleteAllReturnType;
  deleteAllTag: DeleteAllReturnType;
  deleteAllUser: DeleteAllReturnType;
  deleteChat: Chat;
  deleteComment: Comment;
  deleteContest: Contest;
  deleteMessage: Message;
  deleteNoti: Notification;
  deletePost: Post;
  deleteReport: Report;
  deleteStory: Story;
  deleteUser: User;
  endContest: Contest;
  endorseSkill: User;
  hashImageWithPostIds: Scalars['String']['output'];
  interactPost: Post;
  interactStory: Story;
  joinContest: Contest;
  removeInterestCategories: User;
  reportedPost: Post;
  reportedStory: Story;
  setSkills: User;
  unEndorseSkill: User;
  unfollowUser: Following;
  updateComment: Comment;
  updateFollowing: Following;
  updateLevel: Level;
  updatePost: Post;
  updateStory: Story;
  updateUser: User;
  voteComment: Comment;
};

export type MutationAddBiographyArgs = {
  data: AddBiographyInput;
};

export type MutationAddInterestCategoriesArgs = {
  data: InterestCategoriesInput;
};

export type MutationAddNewPhotoToAlbumArgs = {
  data: UpdateAlbumInput;
};

export type MutationAddSkillDefinedListArgs = {
  data?: InputMaybe<AddSkillDefinedListInput>;
};

export type MutationCheckSimilarPostsArgs = {
  post1Id?: InputMaybe<Scalars['String']['input']>;
  post2Id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateAlbumArgs = {
  data: CreateAlbumInput;
};

export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};

export type MutationCreateChatArgs = {
  data: CreateChatInput;
};

export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};

export type MutationCreateContestArgs = {
  data: CreateContestInput;
};

export type MutationCreateMessageArgs = {
  data: CreateMessageInput;
};

export type MutationCreatePostArgs = {
  data: CreatePostInput;
};

export type MutationCreateReportArgs = {
  data: CreateReportInput;
};

export type MutationCreateStoryArgs = {
  data: CreateStoryInput;
};

export type MutationCreateTagArgs = {
  data: CreateTagData;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeleteAlbumArgs = {
  data: DeleteAlbumInput;
};

export type MutationDeleteChatArgs = {
  data: DeleteChatInput;
};

export type MutationDeleteCommentArgs = {
  data: DeleteCommentInput;
};

export type MutationDeleteContestArgs = {
  data: DeleteContestInput;
};

export type MutationDeleteMessageArgs = {
  data: DeleteMessageInput;
};

export type MutationDeleteNotiArgs = {
  data: DeleteNotiInput;
};

export type MutationDeletePostArgs = {
  data: DeletePostInput;
};

export type MutationDeleteReportArgs = {
  data: DeleteReportInput;
};

export type MutationDeleteStoryArgs = {
  data: DeleteStoryInput;
};

export type MutationDeleteUserArgs = {
  data: DeleteUserInput;
};

export type MutationEndContestArgs = {
  data: EndContestInput;
};

export type MutationEndorseSkillArgs = {
  data: EndorseSkillInput;
};

export type MutationHashImageWithPostIdsArgs = {
  data?: InputMaybe<HashImageWithPostIdsInput>;
};

export type MutationInteractPostArgs = {
  data: InteractPostInput;
};

export type MutationInteractStoryArgs = {
  data: InteractStoryInput;
};

export type MutationJoinContestArgs = {
  data: JoinContestInput;
};

export type MutationRemoveInterestCategoriesArgs = {
  data: InterestCategoriesInput;
};

export type MutationReportedPostArgs = {
  data: ReportPostInput;
};

export type MutationReportedStoryArgs = {
  data: ReportStoryInput;
};

export type MutationSetSkillsArgs = {
  data: SetSkillInput;
};

export type MutationUnEndorseSkillArgs = {
  data: EndorseSkillInput;
};

export type MutationUnfollowUserArgs = {
  data: UnfollowInput;
};

export type MutationUpdateCommentArgs = {
  data: UpdateCommentInput;
};

export type MutationUpdateFollowingArgs = {
  data: UpdateFollowingInput;
};

export type MutationUpdateLevelArgs = {
  data: UpdateLevelInput;
};

export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
};

export type MutationUpdateStoryArgs = {
  data: UpdateStoryInput;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type MutationVoteCommentArgs = {
  data: VoteCommentInput;
};

export type NotInAlbumInfoInput = {
  albumId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  postId: Scalars['String']['output'];
  postImage: Scalars['String']['output'];
  postTitle: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userIds: Array<Maybe<User>>;
  userTriggerId: User;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  albumId: Array<Maybe<Album>>;
  caption: Scalars['String']['output'];
  categoryId: Array<Maybe<Category>>;
  comments: Array<Maybe<Comment>>;
  contestId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Image;
  points: Scalars['Int']['output'];
  postViewStatus: ViewStatus;
  reportedUserIds: Array<Maybe<Scalars['String']['output']>>;
  tag: Array<Maybe<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: User;
  userLikedPost: Array<Maybe<Scalars['String']['output']>>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
  timeCall: Scalars['Int']['output'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostInfoInput = {
  postId: Scalars['ID']['input'];
};

export type PostPagination = {
  __typename?: 'PostPagination';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
};

export type ProfileInfoInput = {
  userId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  _TEST_QUERY?: Maybe<Scalars['String']['output']>;
  albumInfo: Array<Maybe<Post>>;
  allAlbums: Array<Maybe<Album>>;
  allCategories: Array<Maybe<Category>>;
  allChats: Array<Maybe<Chat>>;
  allContests: Array<Maybe<Contest>>;
  allFollower: Array<Maybe<Follower>>;
  allFollowing: Array<Maybe<Following>>;
  allImageInfos: Array<Maybe<ImageInfo>>;
  allImages: Array<Maybe<Image>>;
  allLevels: Array<Maybe<Level>>;
  allMessages: Array<Maybe<Message>>;
  allNotis: Array<Maybe<Notification>>;
  allPosts: Array<Maybe<Post>>;
  allReports: Array<Maybe<Report>>;
  allStories: Array<Maybe<Story>>;
  allTags: Array<Maybe<Tag>>;
  allUsers: Array<Maybe<User>>;
  categoryInfo: Category;
  chatInfo: Chat;
  chatInfoByUserId?: Maybe<Array<Maybe<Chat>>>;
  contestInfo: Contest;
  contestPosts: PostConnection;
  explorePosts: PostPagination;
  getAllUserLeaderboard: Array<Maybe<User>>;
  getAllUserPosts: PostConnection;
  getAllUserStories: StoryConnection;
  getChatMessage: MessageConnection;
  getCommentChild: Comment;
  getCommentsByPostId: CommentPagination;
  getCommentsByStoryId: CommentPagination;
  getImageById: Image;
  getNewFeed: PostConnection;
  getNewStories: StoryConnection;
  getSkillDefinedList: Array<Maybe<Skill>>;
  getTopContestPosts: Array<Maybe<Post>>;
  getUserFollowingLeaderBoard: Array<Maybe<User>>;
  messageInfo: Message;
  postInfo: Post;
  postNotInAlbum: Array<Maybe<Post>>;
  reportInfo: Report;
  searchQuery: SearchReturnType;
  searchResult: SearchReturnType;
  similarPosts: PostPagination;
  storyInfo: Story;
  suggestTags: Array<Maybe<Tag>>;
  suggestUserToFollow: UserPagination;
  tagInfo: Tag;
  userAllAlbum: Array<Maybe<Album>>;
  userFollow: UserFollow;
  userFollowerInfo: Follower;
  userFollowingInfo: Following;
  userInfo: User;
  userLevel: Level;
  userNotis: Array<Maybe<Notification>>;
  verifyUser: User;
};

export type QueryAlbumInfoArgs = {
  data: AlbumInfoInput;
};

export type QueryCategoryInfoArgs = {
  data: CategoryInfoInput;
};

export type QueryChatInfoArgs = {
  data: ChatInfoInput;
};

export type QueryChatInfoByUserIdArgs = {
  data: ChatInfoByUserIdInput;
};

export type QueryContestInfoArgs = {
  data: ContestInfoInput;
};

export type QueryContestPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  contestId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryExplorePostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<ExplorePostsInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetAllUserPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  currentUserId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetAllUserStoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  currentUserId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetChatMessageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  chatId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetCommentChildArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetCommentsByPostIdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<GetCommentsByPostIdInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetCommentsByStoryIdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<GetCommentsByStoryIdInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetImageByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetNewFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeCall?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetNewStoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetTopContestPostsArgs = {
  data: ContestInfoInput;
};

export type QueryGetUserFollowingLeaderBoardArgs = {
  data: UserFollowingLeaderInput;
};

export type QueryMessageInfoArgs = {
  data: MessageInfoInput;
};

export type QueryPostInfoArgs = {
  data: PostInfoInput;
};

export type QueryPostNotInAlbumArgs = {
  data: NotInAlbumInfoInput;
};

export type QueryReportInfoArgs = {
  data: ReportInfoInput;
};

export type QuerySearchQueryArgs = {
  data: SearchQueryInput;
};

export type QuerySearchResultArgs = {
  data: SearchQueryInput;
};

export type QuerySimilarPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  data: SimilarPostsInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryStoryInfoArgs = {
  data: StoryInfoInput;
};

export type QuerySuggestUserToFollowArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  data: SuggestUserToFollowInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTagInfoArgs = {
  data: TagInfoInput;
};

export type QueryUserAllAlbumArgs = {
  data: UserAllAlbumInput;
};

export type QueryUserFollowArgs = {
  data: UserInfoInput;
};

export type QueryUserFollowerInfoArgs = {
  data: UserFollowerInfoInput;
};

export type QueryUserFollowingInfoArgs = {
  data: UserFollowingInfoInput;
};

export type QueryUserInfoArgs = {
  data: UserInfoInput;
};

export type QueryUserLevelArgs = {
  data: UserLevelInput;
};

export type QueryUserNotisArgs = {
  data: UserNotiInfoInput;
};

export type QueryVerifyUserArgs = {
  data: VerifyUserInput;
};

export type Report = {
  __typename?: 'Report';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFinished: Scalars['Boolean']['output'];
  postId: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  userReported: Scalars['ID']['output'];
};

export type ReportInfoInput = {
  reportId: Scalars['ID']['input'];
};

export type ReportPostInput = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type ReportStoryInput = {
  storyId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type SearchQueryInput = {
  searchString: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SearchReturnType = {
  __typename?: 'SearchReturnType';
  posts: Array<Maybe<Post>>;
  stories: Array<Maybe<Story>>;
  tags: Array<Maybe<Tag>>;
  users: Array<Maybe<User>>;
};

export type SetSkillInput = {
  skillIds: Array<InputMaybe<Scalars['String']['input']>>;
  userId: Scalars['ID']['input'];
};

export type SimilarPostsInput = {
  postId: Scalars['String']['input'];
};

export type Skill = {
  __typename?: 'Skill';
  endorsements?: Maybe<Array<Maybe<Endorsement>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Story = {
  __typename?: 'Story';
  categoryId: Array<Maybe<Category>>;
  comments: Array<Maybe<Comment>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Maybe<Scalars['String']['output']>>;
  points: Scalars['Int']['output'];
  reportedUserIds: Array<Maybe<Scalars['String']['output']>>;
  storyViewStatus: ViewStatus;
  tag: Array<Maybe<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: User;
  userLikedStory: Array<Maybe<Scalars['String']['output']>>;
};

export type StoryConnection = {
  __typename?: 'StoryConnection';
  edges: Array<StoryEdge>;
  pageInfo: PageInfo;
};

export type StoryEdge = {
  __typename?: 'StoryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Story>;
};

export type StoryInfoInput = {
  storyId: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _TEST_SUBCRIPTION: Scalars['Int']['output'];
  createdMessage?: Maybe<Message>;
  updateStatusChat?: Maybe<Chat>;
};

export type SubscriptionCreatedMessageArgs = {
  chatId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionUpdateStatusChatArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SuggestUserToFollowInput = {
  userId: Scalars['ID']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Array<Maybe<Post>>;
};

export type TagInfoInput = {
  tag: Scalars['String']['input'];
};

export type UnfollowInput = {
  followingId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateAlbumInput = {
  albumId: Scalars['ID']['input'];
  postIds: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type UpdateCommentInput = {
  commentId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
};

export type UpdateFollowingInput = {
  followingId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateLevelInput = {
  userId: Scalars['ID']['input'];
  xp: Scalars['Int']['input'];
};

export type UpdatePostInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['ID']['input'];
  postViewStatus?: InputMaybe<ViewStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReportInput = {
  isFinished: Scalars['Boolean']['input'];
  reportId: Scalars['ID']['input'];
};

export type UpdateStoryInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  storyId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  backgroundImageURL?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hashPassword?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profileImageURL?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  albums: Array<Maybe<Album>>;
  backgroundImageURL: Scalars['String']['output'];
  biography?: Maybe<Scalars['String']['output']>;
  birthday: Scalars['String']['output'];
  chatIDs: Array<Maybe<Chat>>;
  contestPrizeList: Array<Maybe<Contest_Prize>>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hashPassword: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  interestCategories?: Maybe<Array<Maybe<Category>>>;
  isAdmin: Scalars['Int']['output'];
  joinedContestIds: Array<Maybe<Contest>>;
  level: Level;
  messages: Array<Maybe<Message>>;
  name: Scalars['String']['output'];
  notiIds: Array<Maybe<Notification>>;
  phoneNumber: Scalars['String']['output'];
  posts: Array<Maybe<Post>>;
  profileImageURL: Scalars['String']['output'];
  stories: Array<Maybe<Story>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userEndorsements?: Maybe<Array<Maybe<Endorsement>>>;
};

export type UserAllAlbumInput = {
  userId: Scalars['ID']['input'];
};

export type UserAllCategoryInput = {
  userId: Scalars['ID']['input'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<User>;
};

export type UserFollow = {
  __typename?: 'UserFollow';
  follower: Follower;
  following: Following;
};

export type UserFollowerInfoInput = {
  userId: Scalars['ID']['input'];
};

export type UserFollowingInfoInput = {
  userId: Scalars['ID']['input'];
};

export type UserFollowingLeaderInput = {
  userId: Scalars['ID']['input'];
};

export type UserInfoInput = {
  userId: Scalars['ID']['input'];
};

export type UserLevelInput = {
  userId: Scalars['ID']['input'];
};

export type UserNotiInfoInput = {
  userId: Scalars['ID']['input'];
};

export type UserPagination = {
  __typename?: 'UserPagination';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type VerifyUserInput = {
  email: Scalars['String']['input'];
  hashPassword: Scalars['String']['input'];
};

export enum ViewStatus {
  OnlyFollowers = 'ONLY_FOLLOWERS',
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type VoteCommentInput = {
  action: VoteCommentAction;
  commentId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CheckSimilarPostsDetails = {
  __typename?: 'checkSimilarPostsDetails';
  isSimilar?: Maybe<Scalars['Boolean']['output']>;
  post1Imageurl?: Maybe<Scalars['String']['output']>;
  post2ImageUrl?: Maybe<Scalars['String']['output']>;
};

export type HashImageWithPostIdsInput = {
  postIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum VoteCommentAction {
  Cancel = 'CANCEL',
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE',
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
  // eslint-disable-next-line no-undef
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    {
      [key in TKey]: TResult;
    },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {
      [key in TKey]: TResult;
    },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddBiographyInput: AddBiographyInput;
  AddSkillDefinedListInput: AddSkillDefinedListInput;
  Album: ResolverTypeWrapper<Album>;
  AlbumInfoInput: AlbumInfoInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryInfoInput: CategoryInfoInput;
  Chat: ResolverTypeWrapper<Chat>;
  ChatInfoByUserIdInput: ChatInfoByUserIdInput;
  ChatInfoInput: ChatInfoInput;
  Comment: ResolverTypeWrapper<Comment>;
  CommentEdge: ResolverTypeWrapper<CommentEdge>;
  CommentPagination: ResolverTypeWrapper<CommentPagination>;
  Contest: ResolverTypeWrapper<Contest>;
  ContestInfoInput: ContestInfoInput;
  ContestPostsInpout: ContestPostsInpout;
  Contest_Prize: ResolverTypeWrapper<Contest_Prize>;
  CreateAlbumInput: CreateAlbumInput;
  CreateCategoryInput: CreateCategoryInput;
  CreateChatInput: CreateChatInput;
  CreateCommentInput: CreateCommentInput;
  CreateContestInput: CreateContestInput;
  CreateContestPrizeInput: CreateContestPrizeInput;
  CreateMessageInput: CreateMessageInput;
  CreatePostInput: CreatePostInput;
  CreateReportInput: CreateReportInput;
  CreateStoryInput: CreateStoryInput;
  CreateTagData: CreateTagData;
  CreateUserInput: CreateUserInput;
  DeleteAlbumInput: DeleteAlbumInput;
  DeleteAllReturnType: ResolverTypeWrapper<DeleteAllReturnType>;
  DeleteChatInput: DeleteChatInput;
  DeleteCommentInput: DeleteCommentInput;
  DeleteContestInput: DeleteContestInput;
  DeleteMessageInput: DeleteMessageInput;
  DeleteNotiInput: DeleteNotiInput;
  DeletePostInput: DeletePostInput;
  DeleteReportInput: DeleteReportInput;
  DeleteStoryInput: DeleteStoryInput;
  DeleteUserInput: DeleteUserInput;
  EndContestInput: EndContestInput;
  EndorseSkillInput: EndorseSkillInput;
  Endorsement: ResolverTypeWrapper<Endorsement>;
  ExplorePostsInput: ExplorePostsInput;
  Follower: ResolverTypeWrapper<Follower>;
  Following: ResolverTypeWrapper<Following>;
  GetCommentsByPostIdInput: GetCommentsByPostIdInput;
  GetCommentsByStoryIdInput: GetCommentsByStoryIdInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<Image>;
  ImageInfo: ResolverTypeWrapper<ImageInfo>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InteractPostInput: InteractPostInput;
  InteractStoryInput: InteractStoryInput;
  InterestCategoriesInput: InterestCategoriesInput;
  JoinContestInput: JoinContestInput;
  Level: ResolverTypeWrapper<Level>;
  Message: ResolverTypeWrapper<Message>;
  MessageConnection: ResolverTypeWrapper<MessageConnection>;
  MessageEdge: ResolverTypeWrapper<MessageEdge>;
  MessageInfoInput: MessageInfoInput;
  Mutation: ResolverTypeWrapper<{}>;
  NotInAlbumInfoInput: NotInAlbumInfoInput;
  Notification: ResolverTypeWrapper<Notification>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Post: ResolverTypeWrapper<Post>;
  PostConnection: ResolverTypeWrapper<PostConnection>;
  PostEdge: ResolverTypeWrapper<PostEdge>;
  PostInfoInput: PostInfoInput;
  PostPagination: ResolverTypeWrapper<PostPagination>;
  ProfileInfoInput: ProfileInfoInput;
  Query: ResolverTypeWrapper<{}>;
  Report: ResolverTypeWrapper<Report>;
  ReportInfoInput: ReportInfoInput;
  ReportPostInput: ReportPostInput;
  ReportStoryInput: ReportStoryInput;
  SearchQueryInput: SearchQueryInput;
  SearchReturnType: ResolverTypeWrapper<SearchReturnType>;
  SetSkillInput: SetSkillInput;
  SimilarPostsInput: SimilarPostsInput;
  Skill: ResolverTypeWrapper<Skill>;
  Story: ResolverTypeWrapper<Story>;
  StoryConnection: ResolverTypeWrapper<StoryConnection>;
  StoryEdge: ResolverTypeWrapper<StoryEdge>;
  StoryInfoInput: StoryInfoInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  SuggestUserToFollowInput: SuggestUserToFollowInput;
  Tag: ResolverTypeWrapper<Tag>;
  TagInfoInput: TagInfoInput;
  UnfollowInput: UnfollowInput;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateCommentInput: UpdateCommentInput;
  UpdateFollowingInput: UpdateFollowingInput;
  UpdateLevelInput: UpdateLevelInput;
  UpdatePostInput: UpdatePostInput;
  UpdateReportInput: UpdateReportInput;
  UpdateStoryInput: UpdateStoryInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserAllAlbumInput: UserAllAlbumInput;
  UserAllCategoryInput: UserAllCategoryInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserFollow: ResolverTypeWrapper<UserFollow>;
  UserFollowerInfoInput: UserFollowerInfoInput;
  UserFollowingInfoInput: UserFollowingInfoInput;
  UserFollowingLeaderInput: UserFollowingLeaderInput;
  UserInfoInput: UserInfoInput;
  UserLevelInput: UserLevelInput;
  UserNotiInfoInput: UserNotiInfoInput;
  UserPagination: ResolverTypeWrapper<UserPagination>;
  VerifyUserInput: VerifyUserInput;
  ViewStatus: ViewStatus;
  VoteCommentInput: VoteCommentInput;
  checkSimilarPostsDetails: ResolverTypeWrapper<CheckSimilarPostsDetails>;
  hashImageWithPostIdsInput: HashImageWithPostIdsInput;
  voteCommentAction: VoteCommentAction;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddBiographyInput: AddBiographyInput;
  AddSkillDefinedListInput: AddSkillDefinedListInput;
  Album: Album;
  AlbumInfoInput: AlbumInfoInput;
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  CategoryInfoInput: CategoryInfoInput;
  Chat: Chat;
  ChatInfoByUserIdInput: ChatInfoByUserIdInput;
  ChatInfoInput: ChatInfoInput;
  Comment: Comment;
  CommentEdge: CommentEdge;
  CommentPagination: CommentPagination;
  Contest: Contest;
  ContestInfoInput: ContestInfoInput;
  ContestPostsInpout: ContestPostsInpout;
  Contest_Prize: Contest_Prize;
  CreateAlbumInput: CreateAlbumInput;
  CreateCategoryInput: CreateCategoryInput;
  CreateChatInput: CreateChatInput;
  CreateCommentInput: CreateCommentInput;
  CreateContestInput: CreateContestInput;
  CreateContestPrizeInput: CreateContestPrizeInput;
  CreateMessageInput: CreateMessageInput;
  CreatePostInput: CreatePostInput;
  CreateReportInput: CreateReportInput;
  CreateStoryInput: CreateStoryInput;
  CreateTagData: CreateTagData;
  CreateUserInput: CreateUserInput;
  DeleteAlbumInput: DeleteAlbumInput;
  DeleteAllReturnType: DeleteAllReturnType;
  DeleteChatInput: DeleteChatInput;
  DeleteCommentInput: DeleteCommentInput;
  DeleteContestInput: DeleteContestInput;
  DeleteMessageInput: DeleteMessageInput;
  DeleteNotiInput: DeleteNotiInput;
  DeletePostInput: DeletePostInput;
  DeleteReportInput: DeleteReportInput;
  DeleteStoryInput: DeleteStoryInput;
  DeleteUserInput: DeleteUserInput;
  EndContestInput: EndContestInput;
  EndorseSkillInput: EndorseSkillInput;
  Endorsement: Endorsement;
  ExplorePostsInput: ExplorePostsInput;
  Follower: Follower;
  Following: Following;
  GetCommentsByPostIdInput: GetCommentsByPostIdInput;
  GetCommentsByStoryIdInput: GetCommentsByStoryIdInput;
  ID: Scalars['ID']['output'];
  Image: Image;
  ImageInfo: ImageInfo;
  Int: Scalars['Int']['output'];
  InteractPostInput: InteractPostInput;
  InteractStoryInput: InteractStoryInput;
  InterestCategoriesInput: InterestCategoriesInput;
  JoinContestInput: JoinContestInput;
  Level: Level;
  Message: Message;
  MessageConnection: MessageConnection;
  MessageEdge: MessageEdge;
  MessageInfoInput: MessageInfoInput;
  Mutation: {};
  NotInAlbumInfoInput: NotInAlbumInfoInput;
  Notification: Notification;
  PageInfo: PageInfo;
  Post: Post;
  PostConnection: PostConnection;
  PostEdge: PostEdge;
  PostInfoInput: PostInfoInput;
  PostPagination: PostPagination;
  ProfileInfoInput: ProfileInfoInput;
  Query: {};
  Report: Report;
  ReportInfoInput: ReportInfoInput;
  ReportPostInput: ReportPostInput;
  ReportStoryInput: ReportStoryInput;
  SearchQueryInput: SearchQueryInput;
  SearchReturnType: SearchReturnType;
  SetSkillInput: SetSkillInput;
  SimilarPostsInput: SimilarPostsInput;
  Skill: Skill;
  Story: Story;
  StoryConnection: StoryConnection;
  StoryEdge: StoryEdge;
  StoryInfoInput: StoryInfoInput;
  String: Scalars['String']['output'];
  Subscription: {};
  SuggestUserToFollowInput: SuggestUserToFollowInput;
  Tag: Tag;
  TagInfoInput: TagInfoInput;
  UnfollowInput: UnfollowInput;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateCommentInput: UpdateCommentInput;
  UpdateFollowingInput: UpdateFollowingInput;
  UpdateLevelInput: UpdateLevelInput;
  UpdatePostInput: UpdatePostInput;
  UpdateReportInput: UpdateReportInput;
  UpdateStoryInput: UpdateStoryInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserAllAlbumInput: UserAllAlbumInput;
  UserAllCategoryInput: UserAllCategoryInput;
  UserEdge: UserEdge;
  UserFollow: UserFollow;
  UserFollowerInfoInput: UserFollowerInfoInput;
  UserFollowingInfoInput: UserFollowingInfoInput;
  UserFollowingLeaderInput: UserFollowingLeaderInput;
  UserInfoInput: UserInfoInput;
  UserLevelInput: UserLevelInput;
  UserNotiInfoInput: UserNotiInfoInput;
  UserPagination: UserPagination;
  VerifyUserInput: VerifyUserInput;
  VoteCommentInput: VoteCommentInput;
  checkSimilarPostsDetails: CheckSimilarPostsDetails;
  hashImageWithPostIdsInput: HashImageWithPostIdsInput;
};

export type AlbumResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Album'] = ResolversParentTypes['Album'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Chat'] = ResolversParentTypes['Chat'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastMessageAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messages?: Resolver<
    Array<Maybe<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  userIDs?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
  child?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
    ParentType,
    ContextType
  >;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  downVoteUserlist?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  storyId?: Resolver<ResolversTypes['Story'], ParentType, ContextType>;
  upVoteUserlist?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentEdge'] = ResolversParentTypes['CommentEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentPaginationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentPagination'] = ResolversParentTypes['CommentPagination'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['CommentEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Contest'] = ResolversParentTypes['Contest'],
> = {
  contestImageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contestPrizeList?: Resolver<
    Array<Maybe<ResolversTypes['Contest_Prize']>>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isFinished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  joinedUserIds?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contest_PrizeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Contest_Prize'] = ResolversParentTypes['Contest_Prize'],
> = {
  contestId?: Resolver<ResolversTypes['Contest'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  prizeImageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAllReturnTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['DeleteAllReturnType'] = ResolversParentTypes['DeleteAllReturnType'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EndorsementResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Endorsement'] = ResolversParentTypes['Endorsement'],
> = {
  endorsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  skill?: Resolver<Maybe<ResolversTypes['Skill']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Follower'] = ResolversParentTypes['Follower'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userFollower?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowingResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Following'] = ResolversParentTypes['Following'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userFollowing?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Image'] = ResolversParentTypes['Image'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageInfoId?: Resolver<ResolversTypes['ImageInfo'], ParentType, ContextType>;
  postConnection?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageInfoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ImageInfo'] = ResolversParentTypes['ImageInfo'],
> = {
  ISO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aperture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  camera?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyRight?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  focalLength?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageId?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  lens?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shutterSpeed?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  takenWhen?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LevelResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Level'] = ResolversParentTypes['Level'],
> = {
  currentLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentXP?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Message'] = ResolversParentTypes['Message'],
> = {
  chatId?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isImage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['MessageConnection'] = ResolversParentTypes['MessageConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['MessageEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['MessageEdge'] = ResolversParentTypes['MessageEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  _TEST_MUTATION?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  addBiography?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationAddBiographyArgs, 'data'>
  >;
  addInterestCategories?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationAddInterestCategoriesArgs, 'data'>
  >;
  addNewPhotoToAlbum?: Resolver<
    ResolversTypes['Album'],
    ParentType,
    ContextType,
    RequireFields<MutationAddNewPhotoToAlbumArgs, 'data'>
  >;
  addSkillDefinedList?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<MutationAddSkillDefinedListArgs>
  >;
  checkSimilarPosts?: Resolver<
    ResolversTypes['checkSimilarPostsDetails'],
    ParentType,
    ContextType,
    Partial<MutationCheckSimilarPostsArgs>
  >;
  createAlbum?: Resolver<
    ResolversTypes['Album'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAlbumArgs, 'data'>
  >;
  createCategory?: Resolver<
    ResolversTypes['Category'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, 'data'>
  >;
  createChat?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateChatArgs, 'data'>
  >;
  createComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommentArgs, 'data'>
  >;
  createContest?: Resolver<
    ResolversTypes['Contest'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateContestArgs, 'data'>
  >;
  createMessage?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateMessageArgs, 'data'>
  >;
  createPost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostArgs, 'data'>
  >;
  createReport?: Resolver<
    ResolversTypes['Report'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateReportArgs, 'data'>
  >;
  createStory?: Resolver<
    ResolversTypes['Story'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateStoryArgs, 'data'>
  >;
  createTag?: Resolver<
    Array<Maybe<ResolversTypes['Tag']>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTagArgs, 'data'>
  >;
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'data'>
  >;
  deleteAlbum?: Resolver<
    ResolversTypes['Album'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAlbumArgs, 'data'>
  >;
  deleteAllAlbum?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllChat?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllMessage?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllNoti?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllPost?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllReport?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllStory?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllTag?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteAllUser?: Resolver<
    ResolversTypes['DeleteAllReturnType'],
    ParentType,
    ContextType
  >;
  deleteChat?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteChatArgs, 'data'>
  >;
  deleteComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommentArgs, 'data'>
  >;
  deleteContest?: Resolver<
    ResolversTypes['Contest'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteContestArgs, 'data'>
  >;
  deleteMessage?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteMessageArgs, 'data'>
  >;
  deleteNoti?: Resolver<
    ResolversTypes['Notification'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteNotiArgs, 'data'>
  >;
  deletePost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationDeletePostArgs, 'data'>
  >;
  deleteReport?: Resolver<
    ResolversTypes['Report'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReportArgs, 'data'>
  >;
  deleteStory?: Resolver<
    ResolversTypes['Story'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteStoryArgs, 'data'>
  >;
  deleteUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'data'>
  >;
  endContest?: Resolver<
    ResolversTypes['Contest'],
    ParentType,
    ContextType,
    RequireFields<MutationEndContestArgs, 'data'>
  >;
  endorseSkill?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationEndorseSkillArgs, 'data'>
  >;
  hashImageWithPostIds?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    Partial<MutationHashImageWithPostIdsArgs>
  >;
  interactPost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationInteractPostArgs, 'data'>
  >;
  interactStory?: Resolver<
    ResolversTypes['Story'],
    ParentType,
    ContextType,
    RequireFields<MutationInteractStoryArgs, 'data'>
  >;
  joinContest?: Resolver<
    ResolversTypes['Contest'],
    ParentType,
    ContextType,
    RequireFields<MutationJoinContestArgs, 'data'>
  >;
  removeInterestCategories?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveInterestCategoriesArgs, 'data'>
  >;
  reportedPost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationReportedPostArgs, 'data'>
  >;
  reportedStory?: Resolver<
    ResolversTypes['Story'],
    ParentType,
    ContextType,
    RequireFields<MutationReportedStoryArgs, 'data'>
  >;
  setSkills?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationSetSkillsArgs, 'data'>
  >;
  unEndorseSkill?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUnEndorseSkillArgs, 'data'>
  >;
  unfollowUser?: Resolver<
    ResolversTypes['Following'],
    ParentType,
    ContextType,
    RequireFields<MutationUnfollowUserArgs, 'data'>
  >;
  updateComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommentArgs, 'data'>
  >;
  updateFollowing?: Resolver<
    ResolversTypes['Following'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFollowingArgs, 'data'>
  >;
  updateLevel?: Resolver<
    ResolversTypes['Level'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateLevelArgs, 'data'>
  >;
  updatePost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePostArgs, 'data'>
  >;
  updateStory?: Resolver<
    ResolversTypes['Story'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateStoryArgs, 'data'>
  >;
  updateUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'data'>
  >;
  voteComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationVoteCommentArgs, 'data'>
  >;
};

export type NotificationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Notification'] = ResolversParentTypes['Notification'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userIds?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  userTriggerId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Post'] = ResolversParentTypes['Post'],
> = {
  albumId?: Resolver<
    Array<Maybe<ResolversTypes['Album']>>,
    ParentType,
    ContextType
  >;
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryId?: Resolver<
    Array<Maybe<ResolversTypes['Category']>>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<Maybe<ResolversTypes['Comment']>>,
    ParentType,
    ContextType
  >;
  contestId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  postViewStatus?: Resolver<
    ResolversTypes['ViewStatus'],
    ParentType,
    ContextType
  >;
  reportedUserIds?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  tag?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userLikedPost?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostConnection'] = ResolversParentTypes['PostConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['PostEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  timeCall?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostEdge'] = ResolversParentTypes['PostEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostPaginationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostPagination'] = ResolversParentTypes['PostPagination'],
> = {
  edges?: Resolver<Array<ResolversTypes['PostEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _TEST_QUERY?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  albumInfo?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType,
    RequireFields<QueryAlbumInfoArgs, 'data'>
  >;
  allAlbums?: Resolver<
    Array<Maybe<ResolversTypes['Album']>>,
    ParentType,
    ContextType
  >;
  allCategories?: Resolver<
    Array<Maybe<ResolversTypes['Category']>>,
    ParentType,
    ContextType
  >;
  allChats?: Resolver<
    Array<Maybe<ResolversTypes['Chat']>>,
    ParentType,
    ContextType
  >;
  allContests?: Resolver<
    Array<Maybe<ResolversTypes['Contest']>>,
    ParentType,
    ContextType
  >;
  allFollower?: Resolver<
    Array<Maybe<ResolversTypes['Follower']>>,
    ParentType,
    ContextType
  >;
  allFollowing?: Resolver<
    Array<Maybe<ResolversTypes['Following']>>,
    ParentType,
    ContextType
  >;
  allImageInfos?: Resolver<
    Array<Maybe<ResolversTypes['ImageInfo']>>,
    ParentType,
    ContextType
  >;
  allImages?: Resolver<
    Array<Maybe<ResolversTypes['Image']>>,
    ParentType,
    ContextType
  >;
  allLevels?: Resolver<
    Array<Maybe<ResolversTypes['Level']>>,
    ParentType,
    ContextType
  >;
  allMessages?: Resolver<
    Array<Maybe<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  allNotis?: Resolver<
    Array<Maybe<ResolversTypes['Notification']>>,
    ParentType,
    ContextType
  >;
  allPosts?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType
  >;
  allReports?: Resolver<
    Array<Maybe<ResolversTypes['Report']>>,
    ParentType,
    ContextType
  >;
  allStories?: Resolver<
    Array<Maybe<ResolversTypes['Story']>>,
    ParentType,
    ContextType
  >;
  allTags?: Resolver<
    Array<Maybe<ResolversTypes['Tag']>>,
    ParentType,
    ContextType
  >;
  allUsers?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  categoryInfo?: Resolver<
    ResolversTypes['Category'],
    ParentType,
    ContextType,
    RequireFields<QueryCategoryInfoArgs, 'data'>
  >;
  chatInfo?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<QueryChatInfoArgs, 'data'>
  >;
  chatInfoByUserId?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Chat']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryChatInfoByUserIdArgs, 'data'>
  >;
  contestInfo?: Resolver<
    ResolversTypes['Contest'],
    ParentType,
    ContextType,
    RequireFields<QueryContestInfoArgs, 'data'>
  >;
  contestPosts?: Resolver<
    ResolversTypes['PostConnection'],
    ParentType,
    ContextType,
    Partial<QueryContestPostsArgs>
  >;
  explorePosts?: Resolver<
    ResolversTypes['PostPagination'],
    ParentType,
    ContextType,
    Partial<QueryExplorePostsArgs>
  >;
  getAllUserLeaderboard?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  getAllUserPosts?: Resolver<
    ResolversTypes['PostConnection'],
    ParentType,
    ContextType,
    Partial<QueryGetAllUserPostsArgs>
  >;
  getAllUserStories?: Resolver<
    ResolversTypes['StoryConnection'],
    ParentType,
    ContextType,
    Partial<QueryGetAllUserStoriesArgs>
  >;
  getChatMessage?: Resolver<
    ResolversTypes['MessageConnection'],
    ParentType,
    ContextType,
    Partial<QueryGetChatMessageArgs>
  >;
  getCommentChild?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<QueryGetCommentChildArgs, 'id'>
  >;
  getCommentsByPostId?: Resolver<
    ResolversTypes['CommentPagination'],
    ParentType,
    ContextType,
    Partial<QueryGetCommentsByPostIdArgs>
  >;
  getCommentsByStoryId?: Resolver<
    ResolversTypes['CommentPagination'],
    ParentType,
    ContextType,
    Partial<QueryGetCommentsByStoryIdArgs>
  >;
  getImageById?: Resolver<
    ResolversTypes['Image'],
    ParentType,
    ContextType,
    RequireFields<QueryGetImageByIdArgs, 'id'>
  >;
  getNewFeed?: Resolver<
    ResolversTypes['PostConnection'],
    ParentType,
    ContextType,
    Partial<QueryGetNewFeedArgs>
  >;
  getNewStories?: Resolver<
    ResolversTypes['StoryConnection'],
    ParentType,
    ContextType,
    Partial<QueryGetNewStoriesArgs>
  >;
  getSkillDefinedList?: Resolver<
    Array<Maybe<ResolversTypes['Skill']>>,
    ParentType,
    ContextType
  >;
  getTopContestPosts?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetTopContestPostsArgs, 'data'>
  >;
  getUserFollowingLeaderBoard?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserFollowingLeaderBoardArgs, 'data'>
  >;
  messageInfo?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<QueryMessageInfoArgs, 'data'>
  >;
  postInfo?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<QueryPostInfoArgs, 'data'>
  >;
  postNotInAlbum?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType,
    RequireFields<QueryPostNotInAlbumArgs, 'data'>
  >;
  reportInfo?: Resolver<
    ResolversTypes['Report'],
    ParentType,
    ContextType,
    RequireFields<QueryReportInfoArgs, 'data'>
  >;
  searchQuery?: Resolver<
    ResolversTypes['SearchReturnType'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchQueryArgs, 'data'>
  >;
  searchResult?: Resolver<
    ResolversTypes['SearchReturnType'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchResultArgs, 'data'>
  >;
  similarPosts?: Resolver<
    ResolversTypes['PostPagination'],
    ParentType,
    ContextType,
    RequireFields<QuerySimilarPostsArgs, 'data'>
  >;
  storyInfo?: Resolver<
    ResolversTypes['Story'],
    ParentType,
    ContextType,
    RequireFields<QueryStoryInfoArgs, 'data'>
  >;
  suggestTags?: Resolver<
    Array<Maybe<ResolversTypes['Tag']>>,
    ParentType,
    ContextType
  >;
  suggestUserToFollow?: Resolver<
    ResolversTypes['UserPagination'],
    ParentType,
    ContextType,
    RequireFields<QuerySuggestUserToFollowArgs, 'data'>
  >;
  tagInfo?: Resolver<
    ResolversTypes['Tag'],
    ParentType,
    ContextType,
    RequireFields<QueryTagInfoArgs, 'data'>
  >;
  userAllAlbum?: Resolver<
    Array<Maybe<ResolversTypes['Album']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUserAllAlbumArgs, 'data'>
  >;
  userFollow?: Resolver<
    ResolversTypes['UserFollow'],
    ParentType,
    ContextType,
    RequireFields<QueryUserFollowArgs, 'data'>
  >;
  userFollowerInfo?: Resolver<
    ResolversTypes['Follower'],
    ParentType,
    ContextType,
    RequireFields<QueryUserFollowerInfoArgs, 'data'>
  >;
  userFollowingInfo?: Resolver<
    ResolversTypes['Following'],
    ParentType,
    ContextType,
    RequireFields<QueryUserFollowingInfoArgs, 'data'>
  >;
  userInfo?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryUserInfoArgs, 'data'>
  >;
  userLevel?: Resolver<
    ResolversTypes['Level'],
    ParentType,
    ContextType,
    RequireFields<QueryUserLevelArgs, 'data'>
  >;
  userNotis?: Resolver<
    Array<Maybe<ResolversTypes['Notification']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUserNotisArgs, 'data'>
  >;
  verifyUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryVerifyUserArgs, 'data'>
  >;
};

export type ReportResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Report'] = ResolversParentTypes['Report'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isFinished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userReported?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchReturnTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['SearchReturnType'] = ResolversParentTypes['SearchReturnType'],
> = {
  posts?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType
  >;
  stories?: Resolver<
    Array<Maybe<ResolversTypes['Story']>>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  users?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Skill'] = ResolversParentTypes['Skill'],
> = {
  endorsements?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Endorsement']>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Story'] = ResolversParentTypes['Story'],
> = {
  categoryId?: Resolver<
    Array<Maybe<ResolversTypes['Category']>>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<Maybe<ResolversTypes['Comment']>>,
    ParentType,
    ContextType
  >;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reportedUserIds?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  storyViewStatus?: Resolver<
    ResolversTypes['ViewStatus'],
    ParentType,
    ContextType
  >;
  tag?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userLikedStory?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoryConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['StoryConnection'] = ResolversParentTypes['StoryConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['StoryEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoryEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['StoryEdge'] = ResolversParentTypes['StoryEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  _TEST_SUBCRIPTION?: SubscriptionResolver<
    ResolversTypes['Int'],
    '_TEST_SUBCRIPTION',
    ParentType,
    ContextType
  >;
  createdMessage?: SubscriptionResolver<
    Maybe<ResolversTypes['Message']>,
    'createdMessage',
    ParentType,
    ContextType,
    Partial<SubscriptionCreatedMessageArgs>
  >;
  updateStatusChat?: SubscriptionResolver<
    Maybe<ResolversTypes['Chat']>,
    'updateStatusChat',
    ParentType,
    ContextType,
    Partial<SubscriptionUpdateStatusChatArgs>
  >;
};

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  albums?: Resolver<
    Array<Maybe<ResolversTypes['Album']>>,
    ParentType,
    ContextType
  >;
  backgroundImageURL?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  biography?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chatIDs?: Resolver<
    Array<Maybe<ResolversTypes['Chat']>>,
    ParentType,
    ContextType
  >;
  contestPrizeList?: Resolver<
    Array<Maybe<ResolversTypes['Contest_Prize']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashPassword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interestCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType
  >;
  isAdmin?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  joinedContestIds?: Resolver<
    Array<Maybe<ResolversTypes['Contest']>>,
    ParentType,
    ContextType
  >;
  level?: Resolver<ResolversTypes['Level'], ParentType, ContextType>;
  messages?: Resolver<
    Array<Maybe<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notiIds?: Resolver<
    Array<Maybe<ResolversTypes['Notification']>>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<
    Array<Maybe<ResolversTypes['Post']>>,
    ParentType,
    ContextType
  >;
  profileImageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stories?: Resolver<
    Array<Maybe<ResolversTypes['Story']>>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  userEndorsements?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Endorsement']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserFollowResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserFollow'] = ResolversParentTypes['UserFollow'],
> = {
  follower?: Resolver<ResolversTypes['Follower'], ParentType, ContextType>;
  following?: Resolver<ResolversTypes['Following'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPaginationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserPagination'] = ResolversParentTypes['UserPagination'],
> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckSimilarPostsDetailsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['checkSimilarPostsDetails'] = ResolversParentTypes['checkSimilarPostsDetails'],
> = {
  isSimilar?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  post1Imageurl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  post2ImageUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  CommentPagination?: CommentPaginationResolvers<ContextType>;
  Contest?: ContestResolvers<ContextType>;
  Contest_Prize?: Contest_PrizeResolvers<ContextType>;
  DeleteAllReturnType?: DeleteAllReturnTypeResolvers<ContextType>;
  Endorsement?: EndorsementResolvers<ContextType>;
  Follower?: FollowerResolvers<ContextType>;
  Following?: FollowingResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  ImageInfo?: ImageInfoResolvers<ContextType>;
  Level?: LevelResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageConnection?: MessageConnectionResolvers<ContextType>;
  MessageEdge?: MessageEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostConnection?: PostConnectionResolvers<ContextType>;
  PostEdge?: PostEdgeResolvers<ContextType>;
  PostPagination?: PostPaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Report?: ReportResolvers<ContextType>;
  SearchReturnType?: SearchReturnTypeResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  StoryConnection?: StoryConnectionResolvers<ContextType>;
  StoryEdge?: StoryEdgeResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserFollow?: UserFollowResolvers<ContextType>;
  UserPagination?: UserPaginationResolvers<ContextType>;
  checkSimilarPostsDetails?: CheckSimilarPostsDetailsResolvers<ContextType>;
};
