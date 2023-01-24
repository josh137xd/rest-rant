# Project REST-Rant

REST-Rant is an app where users can review restaurants.




| method |      path          | purpose                                                                       |
| -------|:------------------:| -----------------------------------------------------------------------------:|
|  get   | /                  | The home page                                                                 |
|  get   | /places            | Index page listing all places                                                 |
|  get   | /places/new        | New form for a place                                                          |
|  post  | /places            | Create a new place                                                            |
|  get   | /places:id         | Show one place in detail (Associated rants, new rant form, delete rant button)|
|  get   | /places:id/edit    | Edit form for a place                                                         |
|  put   | /places:id         | Make changes to existing place                                                |                
| delete | /places:id         | Delete a place                                                                |
|  post  | /places:id/rant    | Add rant to a place                                                           |
| delete | /places:id/rant:id | Delete a rant                                                                 |
|  get   |       *            | 404 page (matches any route not defined above)                                |

