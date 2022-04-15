import React from 'react'

export default function TeamList() {
  return (
    <div className=' container team-list-container' >
        <table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Team Name</th>
      <th scope="col">Description</th>
      <th scope="col">Joined On</th>
      <th scope="col"># Members</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>

    </tr>
  </tbody>
</table>
    </div>
  )
}
