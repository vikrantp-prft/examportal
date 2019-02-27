FROM microsoft/dotnet:3.0-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 9000

FROM microsoft/dotnet:3.0-sdk AS build
WORKDIR /src
COPY ["PerftEvaluation.OcelotApiGw.csproj", "./"]
RUN dotnet restore "./PerftEvaluation.OcelotApiGw.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "PerftEvaluation.OcelotApiGw.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "PerftEvaluation.OcelotApiGw.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "PerftEvaluation.OcelotApiGw.dll"]
