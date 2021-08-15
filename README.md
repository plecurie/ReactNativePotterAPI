# ReactNative 
Crossplatform application fetching PotterAPI.

- Use of hooks to handle states and effects (applicatioin color theme)
- React Navigation to navigate within different views.
- Data parsing.

<h1>Introduction</h1>

This is the documentation for Version 1 (V1) of the Harry Potter API, originally released December 2017.

<h1>Response Formats</h1>

The default response format is JSON application/json.

<h1>Authentication</h1>

The API requires an access key for most routes. You can obtain an access key by signing up for an account here.

<h1>All Routes</h1>

All routes need to be prefixed with https://www.potterapi.com/v1/

<h1>Sorting Hat Route</h1>

<pre><code>GET /sortingHat</code></pre>
Returns a random Hogwarts House.

This is the only route that does not require a key.

<h1>Character Routes</h1>

<pre><code> GET /characters </code></pre>
Returns all characters.

<h3>URL Query Parameters</h3>

| Param             |     Value       |   Description                                                       |
| ----------------- |:---------------:| -------------------------------------------------------------------:|
| key               | your api key    | required                                                            |
| name              | string          |                                                                     |
| house             | string          | Valid strings: 'Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff' |
| patronus          | string          |                                                                     |
| species           | string          |                                                                     |
| bloodStatus       | string          |                                                                     |
| role              | string          |                                                                     |
| school            | string          |                                                                     |
| deathEater        | boolean         |                                                                     |
| dumbledoresArmy   | boolean         |                                                                     |
| orderOfThePhoenix | boolean         |                                                                     |
| ministryuOfMagic  | boolean         |                                                                     |
| alias             | string          |                                                                     |
| wand              | string          |                                                                     |
| boggart           | string          |                                                                     |
| animagus          | string          |                                                                     |       
	     	   
	
<pre><code>GET /characters/{characterId} </code></pre>
Returns character with matching character id.

<h3>URL Query Parameters</h3>

| Param             |     Value       |   Description                                                       |
| ----------------- |:---------------:| -------------------------------------------------------------------:|
| key               | your api key    | required                                                            |


<h1> House Routes </h1>
<pre><code>GET /houses </code></pre>
Returns all Hogwarts Houses.

<h3>URL Query Parameters</h3>

| Param             |     Value       |   Description                                                       |
| ----------------- |:---------------:| -------------------------------------------------------------------:|
| key               | your api key    | required                                                            |


<pre><code>GET /houses/{houseId} </code></pre>
Returns house with matching House id. Includes list of characters affiliated with House.

<h3>URL Query Parameters</h3>

| Param             |     Value       |   Description                                                       |
| ----------------- |:---------------:| -------------------------------------------------------------------:|
| key               | your api key    | required                                                            |


<h1> Spell Routes </h1>
<pre><code>GET /spells </code></pre>
Returns all spells.

<h3>URL Query Parameters</h3>

| Param             |     Value       |   Description                                                       |
| ----------------- |:---------------:| -------------------------------------------------------------------:|
| key               | your api key    | required                                                            |


