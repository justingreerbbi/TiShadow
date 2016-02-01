/*
 * Copyright (c) 2011-2014 YY Digital Pty Ltd. All Rights Reserved.
 * Please see the LICENSE file included with this distribution for details.
 */

var includes = [
  Titanium,
  Titanium.createBuffer,
  Titanium.API,
  Titanium.Accelerometer,
  Titanium.Analytics,
  Titanium.App,
  Titanium.App.Properties,
  Titanium.App.Tizen,
  Titanium.Blob,
  Titanium.BlobStream,
  Titanium.Buffer,
  Titanium.BufferStream,
  Titanium.Calendar,
  Titanium.Calendar.Alert,
  Titanium.Calendar.Calendar,
  Titanium.Calendar.Calendar.createEvent,
  Titanium.Calendar.Event,
  Titanium.Calendar.Event.createAlert,
  Titanium.Calendar.Event.createRecurenceRule,
  Titanium.Calendar.Event.createReminder,
  Titanium.Calendar.RecurrenceRule,
  Titanium.Calendar.Reminder,
  Titanium.Cloud,
  Titanium.Cloud.ACLs,
  Titanium.Cloud.ACLs.create,
  Titanium.Cloud.Chats,
  Titanium.Cloud.Chats.create,
  Titanium.Cloud.Checkins,
  Titanium.Cloud.Checkins.create,
  Titanium.Cloud.Clients,
  Titanium.Cloud.Emails,
  Titanium.Cloud.Events,
  Titanium.Cloud.Events.create,
  Titanium.Cloud.Events.showOccurrences,
  Titanium.Cloud.Files,
  Titanium.Cloud.Files.create,
  Titanium.Cloud.Friends,
  Titanium.Cloud.GeoFences,
  Titanium.Cloud.GeoFences.create,
  Titanium.Cloud.KeyValues,
  Titanium.Cloud.Likes,
  Titanium.Cloud.Likes.create,
  Titanium.Cloud.Messages,
  Titanium.Cloud.Messages.create,
  Titanium.Cloud.Messages.showInbox,
  Titanium.Cloud.Messages.showSent,
  Titanium.Cloud.Messages.showThread,
  Titanium.Cloud.Messages.showThreads,
  Titanium.Cloud.Objects,
  Titanium.Cloud.Objects.create,
  Titanium.Cloud.PhotoCollections,
  Titanium.Cloud.PhotoCollections.create,
  Titanium.Cloud.PhotoCollections.showPhotos,
  Titanium.Cloud.PhotoCollections.showSubCollections,
  Titanium.Cloud.Photos,
  Titanium.Cloud.Photos.create,
  Titanium.Cloud.Places,
  Titanium.Cloud.Places.create,
  Titanium.Cloud.Posts,
  Titanium.Cloud.Posts.create,
  Titanium.Cloud.PushNotifications,
  Titanium.Cloud.PushNotifications.showChannels,
  Titanium.Cloud.PushSchedules,
  Titanium.Cloud.PushSchedules.create,
  Titanium.Cloud.Reviews,
  Titanium.Cloud.Reviews.create,
  Titanium.Cloud.SocialIntegrations,
  Titanium.Cloud.Statuses,
  Titanium.Cloud.Statuses.create,
  Titanium.Cloud.Users,
  Titanium.Cloud.Users.create,
  Titanium.Cloud.Users.showMe,
  Titanium.CloudPush,
  Titanium.Codec,
  Titanium.Contacts,
  Titanium.Contacts.createGroup,
  Titanium.Contacts.createPerson,
  Titanium.Contacts.showContacts,
  Titanium.Contacts.Group,
  Titanium.Contacts.Person,
  Titanium.Contacts.Tizen,
  Titanium.Contacts.Tizen.Group,
  Titanium.Database,
  Titanium.Database.DB,
  Titanium.Database.ResultSet,
  Titanium.Facebook,
  Titanium.Facebook.createLoginButton,
  Titanium.Facebook.LoginButton,
  Titanium.Filesystem,
  Titanium.Filesystem.createTempDirectory,
  Titanium.Filesystem.createTempFile,
  Titanium.Filesystem.File,
  Titanium.Filesystem.File.createDirectory,
  Titanium.Filesystem.File.createFile,
  Titanium.Filesystem.File.createTimestamp,
  Titanium.Filesystem.FileStream,
  Titanium.Geolocation,
  Titanium.Geolocation.MobileWeb,
  Titanium.Gesture,
  Titanium.IOStream,
  Titanium.Locale,
  Titanium.Map,
  Titanium.Map.createAnnotation,
  Titanium.Map.createView,
  Titanium.Map.Annotation,
  Titanium.Map.View,
  Titanium.Media,
  Titanium.Media.createAudioPlayer,
  Titanium.Media.createAudioRecorder,
  Titanium.Media.createItem,
  Titanium.Media.createMusicPlayer,
  Titanium.Media.createSound,
  Titanium.Media.createVideoPlayer,
  Titanium.Media.showCamera,
  Titanium.Media.AudioPlayer,
  Titanium.Media.AudioRecorder,
  Titanium.Media.Item,
  Titanium.Media.MusicPlayer,
  Titanium.Media.Sound,
  Titanium.Media.VideoPlayer,
  Titanium.Network,
  Titanium.Network.createBonjourBrowser,
  Titanium.Network.createBonjourService,
  Titanium.Network.createCookie,
  Titanium.Network.createHTTPClient,
  Titanium.Network.createTCPSocket,
  Titanium.Network.registerForPushNotifications,
  Titanium.Network.BonjourBrowser,
  Titanium.Network.BonjourService,
  Titanium.Network.Cookie,
  Titanium.Network.HTTPClient,
  Titanium.Network.Socket,
  Titanium.Network.Socket.createTCP,
  Titanium.Network.Socket.createUDP,
  Titanium.Network.Socket.TCP,
  Titanium.Network.Socket.UDP,
  Titanium.Network.TCPSocket,
  Titanium.Platform,
  Titanium.Platform.createUUID,
  Titanium.Platform.DisplayCaps,
  Titanium.Stream,
  Titanium.Stream.createStream,
  Titanium.UI,
  Titanium.UI.create2DMatrix,
  Titanium.UI.create3DMatrix,
  Titanium.UI.createActivityIndicator,
  Titanium.UI.createAlertDialog,
  Titanium.UI.createAnimation,
  Titanium.UI.createButton,
  Titanium.UI.createButtonBar,
  Titanium.UI.createCoverFlowView,
  Titanium.UI.createDashboardItem,
  Titanium.UI.createDashboardView,
  Titanium.UI.createEmailDialog,
  Titanium.UI.createImageView,
  Titanium.UI.createLabel,
  Titanium.UI.createListSection,
  Titanium.UI.createListView,
  Titanium.UI.createMaskedImage,
  Titanium.UI.createNotification,
  Titanium.UI.createOptionDialog,
  Titanium.UI.createPicker,
  Titanium.UI.createPickerColumn,
  Titanium.UI.createPickerRow,
  Titanium.UI.createProgressBar,
  Titanium.UI.createRefreshControl,
  Titanium.UI.createSMSDialog,
  Titanium.UI.createScrollView,
  Titanium.UI.createScrollableView,
  Titanium.UI.createSearchBar,
  Titanium.UI.createSlider,
  Titanium.UI.createSwitch,
  Titanium.UI.createTab,
  Titanium.UI.createTabGroup,
  Titanium.UI.createTabbedBar,
  Titanium.UI.createTableView,
  Titanium.UI.createTableViewRow,
  Titanium.UI.createTableViewSection,
  Titanium.UI.createTextArea,
  Titanium.UI.createTextField,
  Titanium.UI.createToolbar,
  Titanium.UI.createView,
  Titanium.UI.createWebView,
  Titanium.UI.createWindow,
  Titanium.UI.ActivityIndicator,
  Titanium.UI.ActivityIndicatorStyle,
  Titanium.UI.AlertDialog,
  Titanium.UI.Animation,
  Titanium.UI.Button,
  Titanium.UI.ButtonBar,
  Titanium.UI.Clipboard,
  Titanium.UI.CoverFlowView,
  Titanium.UI.DashboardItem,
  Titanium.UI.DashboardView,
  Titanium.UI.EmailDialog,
  Titanium.UI.ImageView,
  Titanium.UI.Label,
  Titanium.UI.ListItem,
  Titanium.UI.ListSection,
  Titanium.UI.ListView,
  Titanium.UI.MaskedImage,
  Titanium.UI.MobileWeb,
  Titanium.UI.MobileWeb.createNavigationGroup,
  Titanium.UI.MobileWeb.NavigationGroup,
  Titanium.UI.MobileWeb.TableViewSeparatorStyle,
  Titanium.UI.Notification,
  Titanium.UI.OptionDialog,
  Titanium.UI.Picker,
  Titanium.UI.Picker.showDatePickerDialog,
  Titanium.UI.Picker.showTimePickerDialog,
  Titanium.UI.PickerColumn,
  Titanium.UI.PickerRow,
  Titanium.UI.ProgressBar,
  Titanium.UI.RefreshControl,
  Titanium.UI.SMSDialog,
  Titanium.UI.ScrollView,
  Titanium.UI.ScrollableView,
  Titanium.UI.SearchBar,
  Titanium.UI.Slider,
  Titanium.UI.Switch,
  Titanium.UI.Tab,
  Titanium.UI.TabGroup,
  Titanium.UI.TabbedBar,
  Titanium.UI.TableView,
  Titanium.UI.TableViewRow,
  Titanium.UI.TableViewSection,
  Titanium.UI.TextArea,
  Titanium.UI.TextField,
  Titanium.UI.Toolbar,
  Titanium.UI.View,
  Titanium.UI.WebView,
  Titanium.UI.Window,
  Titanium.UI.Window.showNavBar,
  Titanium.UI._2DMatrix,
  Titanium.UI._3DMatrix,
  Titanium.Utils,
  Titanium.XML,
  Titanium.XML.Attr,
  Titanium.XML.CDATASection,
  Titanium.XML.CharacterData,
  Titanium.XML.Comment,
  Titanium.XML.DOMImplementation,
  Titanium.XML.DOMImplementation.createDocument,
  Titanium.XML.DOMImplementation.createDocumentType,
  Titanium.XML.Document,
  Titanium.XML.Document.createAttribute,
  Titanium.XML.Document.createAttributeNS,
  Titanium.XML.Document.createCDATASection,
  Titanium.XML.Document.createComment,
  Titanium.XML.Document.createDocumentFragment,
  Titanium.XML.Document.createElement,
  Titanium.XML.Document.createElementNS,
  Titanium.XML.Document.createEntityReference,
  Titanium.XML.Document.createProcessingInstruction,
  Titanium.XML.Document.createTextNode,
  Titanium.XML.DocumentFragment,
  Titanium.XML.DocumentType,
  Titanium.XML.Element,
  Titanium.XML.Entity,
  Titanium.XML.EntityReference,
  Titanium.XML.NamedNodeMap,
  Titanium.XML.Node,
  Titanium.XML.NodeList,
  Titanium.XML.Notation,
  Titanium.XML.ProcessingInstruction,
  Titanium.XML.Text,
  Titanium.Yahoo
];

if (Ti.Platform.osname !== "android"){
  var ios_includes = [
    Titanium.App.iOS.BackgroundService,
    Titanium.App.iOS.LocalNotification,
    Titanium.App.iOS.SearchableIndex,
    Titanium.App.iOS.SearchableItem,
    Titanium.App.iOS.SearchableItemAttributeSet,
    Titanium.App.iOS.UserActivity,
    Titanium.App.iOS.UserDefaults,
    Titanium.App.iOS.UserNotificationAction,
    Titanium.App.iOS.UserNotificationCategory,
    Titanium.UI.iOS.AdView,
    Titanium.UI.iOS.AnchorAttachmentBehavior,
    Titanium.UI.iOS.Animator,
    Titanium.UI.iOS.ApplicationShortcuts,
    Titanium.UI.iOS.AttributedString,
    Titanium.UI.iOS.BlurView,
    Titanium.UI.iOS.CollisionBehavior,
    Titanium.UI.iOS.CoverFlowView,
    Titanium.UI.iOS.DocumentViewer,
    Titanium.UI.iOS.DynamicItemBehavior,
    Titanium.UI.iOS.GravityBehavior,
    Titanium.UI.iOS.LivePhotoView,
    Titanium.UI.iOS.NavigationWindow,
    Titanium.UI.iOS.NavigationWindow.showNavBar,
    Titanium.UI.iOS.PreviewAction,
    Titanium.UI.iOS.PreviewActionGroup,
    Titanium.UI.iOS.PushBehavior,
    Titanium.UI.iOS.SnapBehavior,
    Titanium.UI.iOS.TabbedBar,
    Titanium.UI.iOS.Toolbar,
    Titanium.UI.iOS.ViewAttachmentBehavior,
    Titanium.UI.iOS._3DMatrix,
    Titanium.UI.iPad.DocumentViewer,
    Titanium.UI.iPad.Popover,
    Titanium.UI.iPad.SplitWindow,
    Titanium.UI.iPad.SplitWindow.showNavBar,
    Titanium.UI.iPhone.ActivityIndicatorStyle,
    Titanium.UI.iPhone.AlertDialogStyle,
    Titanium.UI.iPhone.AnimationStyle,
    Titanium.UI.iPhone.ListViewCellSelectionStyle,
    Titanium.UI.iPhone.ListViewScrollPosition,
    Titanium.UI.iPhone.ListViewSeparatorStyle,
    Titanium.UI.iPhone.ListViewStyle,
    Titanium.UI.iPhone.NavigationGroup,
    Titanium.UI.iPhone.ProgressBarStyle,
    Titanium.UI.iPhone.RowAnimationStyle,
    Titanium.UI.iPhone.ScrollIndicatorStyle,
    Titanium.UI.iPhone.StatusBar,
    Titanium.UI.iPhone.SystemButton,
    Titanium.UI.iPhone.SystemButtonStyle,
    Titanium.UI.iPhone.SystemIcon,
    Titanium.UI.iPhone.TableViewCellSelectionStyle,
    Titanium.UI.iPhone.TableViewScrollPosition,
    Titanium.UI.iPhone.TableViewSeparatorStyle,
    Titanium.UI.iPhone.TableViewStyle
  ];
} else {
  var android_includes = [
    Titanium.Android.ActionBar,
    Titanium.Android.Activity,
    Titanium.Android.BroadcastReceiver,
    Titanium.Android.Calendar,
    Titanium.Android.Calendar.Alert,
    Titanium.Android.Calendar.Calendar,
    Titanium.Android.Calendar.Calendar.createEvent,
    Titanium.Android.Calendar.Event,
    Titanium.Android.Calendar.Event.createAlert,
    Titanium.Android.Calendar.Event.createReminder,
    Titanium.Android.Calendar.Reminder,
    Titanium.Android.Intent,
    Titanium.Android.Menu,
    Titanium.Android.MenuItem,
    Titanium.Android.Notification,
    Titanium.Android.NotificationManager,
    Titanium.Android.PendingIntent,
    Titanium.Android.R,
    Titanium.Android.RemoteViews,
    Titanium.Android.Service,
    Titanium.App.Android.R,
    Titanium.Geolocation.Android.LocationProvider,
    Titanium.Geolocation.Android.LocationRule,
    Titanium.UI.Android.ProgressIndicator,
    Titanium.UI.Android.SearchView
  ];
}
